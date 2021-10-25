import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Fact } from './interfaces/fact';

@Injectable({
  providedIn: 'root'
})

export class ServerApiService {
  apiURL: string = 'http://localhost:4201';
  facts: any = this.getFacts();
  myFacts: any = this.getMyFacts();
  route: any = window.location;

  constructor(private http: HttpClient) { }

  getFacts() {
    return this.getData('all-facts');
  }

  getMyFacts() {
    return this.getData('my-facts');
  }

  saveFact(fact: Fact) {
    return this.postData('save-fact', fact);
  }

  deleteFact(id: string) {
    console.log('sending a DELETE request to: ' + this.apiURL + '/delete-fact/' + id);
    return this.http.get<Fact>(`${this.apiURL}/delete-fact/${id}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getData(route: string) {
    console.log('sending a GET request to: ' + this.apiURL + '/' + route);
    return this.http.get<Fact[]>(`${this.apiURL}/${route}`, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  postData(route: string, factObj: Fact) {
    console.log('sending a POST request to: ' + this.apiURL + '/' + route);
    return this.http.post<Fact>(`${this.apiURL}/${route}`, factObj, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(
      catchError(this.handleError)
    );
  }

  //Error handler - rxjs documentation
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  reloadCurrentRoute() {

    this.route.navigate('/', { skipLocationChange: true }).then(() => {
      this.route.reload();

    });
  }

}
