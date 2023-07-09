import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { throwError, Observable } from 'rxjs';
import { GlobalConstants } from '../../global-constants';

@Injectable({
  providedIn: 'root'
})
export class CreateNewArticleService {

  constructor(private http: HttpClient) { }
  base_url: string = GlobalConstants.backend_url;
  createNewArticle(title: string, content_blocks: string): Observable<any> {
    console.log('createNewArticle() called with title: ' + title + ' and content_blocks: ' + content_blocks);
    return this.http.post<any>(this.base_url + 'articles', { title, content_blocks }).pipe(
      tap(data => console.log(data)),
      // catchError(this.handleError)
    );
  }
}
