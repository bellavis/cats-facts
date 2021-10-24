import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerApiService {
  apiURL: string = 'http://localhost:4201';

  facts: any = this.getFacts();
  // randomImg: any = this.getRandomCatImage();

  constructor(private http: HttpClient) { }

  getFacts() {
    return this.getData('all-facts');
  }

  postFact(fact: object) {
    this.postData('post-fact', fact);
  }

  getData(route: string) {
    console.log('sending a get request to: ' + this.apiURL + '/' + route);
    return this.http.get(this.apiURL + '/' + route).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  postData(route: string, obj: object) {
    return this.http.post(this.apiURL + route, obj).pipe(
      catchError(this.handleError)
    );
  }

  //from angular rxjs documentation
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
