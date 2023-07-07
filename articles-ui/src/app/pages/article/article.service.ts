import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../../global-constants';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }
  base_url: string = GlobalConstants.backend_url;
  getArticle(articleId: number): Observable<any> {
    let url = this.base_url +'articles/'+articleId;
    return this.http.get<any[]>(url).pipe(
      tap(response => {}));
  }
}
