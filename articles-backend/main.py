import datetime
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from google.cloud import datastore

# Initialize Datastore Client
# Note: This is not the best way to do it. We should use environment variables instead of hardcoding the path
#      But for the scope of this project, this is fine.
datastore_client = datastore.Client.from_service_account_json('corise-articles-data-4661661be4e1.json')

# Initialize FastAPI app
app = FastAPI(
    title="CoRise Articles API",
    version="0.0.1"
)

# We're allowing all origins for now. This is not the best practice. We should allow only the frontend origin.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST"]
)

# Heartbeat API -> Returns a simple message to check if the API is up and running
@app.get("/")
async def heartbeat():
    return {"message": "CoRise Articles API is up and running!"}
    
# Get All Articles API -> Returns all articles metadata in ascending order of CreatedAt
@app.get("/articles")
async def get_all_articles():
    query = datastore_client.query(kind='Articles')
    query.order = ['-CreatedAt']
    results =  list(query.fetch())
    all_articles = []
    for entity in results:
        key_id = entity.key.id
        title = entity['Title']
        all_articles.append({"ID": key_id, "Title": title})
    return all_articles

# Get Article by ID API -> Returns article data for a given article ID
@app.get("/articles/{article_id}")
async def get_article_by_id(article_id: int):
    key = datastore_client.key('Articles', article_id)
    article = datastore_client.get(key)
    if article is None:
        return {"message": "Article not found"}
    else:
        article['ID'] = article_id
        return article
    
# Create Article API -> Creates a new article with the given data
@app.post("/articles")
async def create_article(request: Request):
    request_body = await request.json()
    print(request_body)
    key = datastore_client.key('Articles')
    article = datastore.Entity(key=key)
    article.update({
        "Title": request_body['title'],
        "Blocks": request_body['content_blocks'],
        "CreatedAt": datetime.datetime.now()
    })
    datastore_client.put(article)
    return {"message": "Article created successfully", "ID": article.key.id}