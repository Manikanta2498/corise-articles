# Corise Articles

## How to run the project:
I've hosted the frontend on vercel and backend on OnRender.  
For the scope of this project, I've used a free tier server on OnRender, so it might take a few seconds to load the backend for the first time.  

  
You can access the backend APIs here (Note it might take a while for the first access after a long time):  
https://corise-backend.onrender.com/docs  

You can access the frontend here (Make sure you access the frontend after the backend is loaded):  
https://corise-articles.vercel.app/

## How to run the project locally:
## Backend:

- I have used FASTAPI for the backend.
- Command to run the backend: `uvicorn main:app --reload` in the articles-backend directory.
- We should first install the dependencies: `pip install -r requirements.txt` before running the backend.
- The backend will be hosted on port 8000.

### Frontend:

- I have used Angular for the frontend.
- Command to run the frontend locally: `ng serve` in the articles-ui directory to run the CoRise Articles UI. We need to install all the necessary packages using `npm install` command before running the frontend.
- If you don't have Angular CLI installed, you can install it by running the following command: `npm install -g @angular/cli` or run the project using `npm start` command instead of `ng serve`.
- By default, Angular will run on port 4200.  

___
## Features Implemented:
In addition to the existing Articles API and the user interface (UI) that displays articles with block types `Markdown` and `MCQ`, I have introduced a new block type called `FlashCard`. This exciting addition enhances the article viewing experience by introducing collapsible cards that showcase both a question and its corresponding answer. Users can expand or collapse these FlashCards to conveniently access and interact with the question and answer content.

I have also incorporated a functionality that allows users to create new articles directly from the user interface (UI). As an additional convenience, I have provided users with the ability to copy sample text for each block type. They can easily paste this sample text into the appropriate block while creating a new article, making the process more streamlined and user-friendly.
___
## Design Decisions and Trade-offs:
For this take-home assignment, I believe the main objective is to assess the candidate's ability to design and implement a solution with a strong focus on delivering an excellent user experience. Considering the scope of the project, I intentionally avoided over-engineering the solution by not delving into minor details. As a result, I made the following trade-offs:

1. Free-tier server on OnRender: To minimize costs, I opted for a free-tier server on OnRender. Consequently, the initial load of the backend may take a few seconds as the server spins up.

2. Omitted API-Key and authentication: Given the nature of the project, I didn't implement API-Key or authentication mechanisms for the backend APIs. I deemed them unnecessary for this particular assignment.

3. Simplified backend API results: Although best practices recommend more comprehensive API responses with additional fields and HTTP status codes, I chose to keep the backend API responses straightforward and focused on the project's requirements.

4. Minor CSS styling and limited mobile responsiveness: While I prioritized functionality, I left a few minor CSS styling issues unresolved. Additionally, I did not make the UI fully responsive for mobile devices, understanding that it may not be a critical requirement for this specific project.

By consciously making these trade-offs, I aimed to strike a balance between delivering a solid user experience while keeping the project within a reasonable scope.