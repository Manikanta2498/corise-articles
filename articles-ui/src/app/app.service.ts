import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { throwError, Observable } from 'rxjs';
import { GlobalConstants } from './global-constants';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  base_url: string = GlobalConstants.backend_url;
  getAllArticles(): Observable<any> {
    let url = this.base_url +'articles/';
    return this.http.get<any[]>(url).pipe(
      tap(response => {}));
  }
}
