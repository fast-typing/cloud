import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class HTTPService {
  protected readonly api = '123';
  // protected readonly api = environment.defaultUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getFiles(): Observable<any[]> {
    return this._request('GET', 'orders/delivery-types',);
  }


  private _request(method: string, url: string, bodyInput?: any): Observable<any> {
    const token = localStorage.getItem('token')
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`)
    }
    const body = bodyInput;
    const options = {
      headers: headers,
      body: body,
    };

    return this.http
      .request(method, url, options);
  }
}
