import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleserviceService {

  constructor(private httpClientVar: HttpClient) { }

  getMethodFun(): Observable<any> {
    return this.httpClientVar.get('https://api.publicapis.org/entries');
  }

  getMethodPractice(): Observable<any> {
    return this.httpClientVar.get('https://api.coindesk.com/v1/bpi/currentprice.json');
  }

  deleteMethodPractice(): Observable<any> {
    return this.httpClientVar.delete('http://develop.rexcoders.in/api/domain/add');
  }

  postMethodPractice(samplePayload: any): Observable<any> {
    return this.httpClientVar.post('http://develop.rexcoders.in/api/domain/add', samplePayload);
  }

  putMethodPractice(putPayload: any): Observable<any> {
    return this.httpClientVar.put('http://develop.rexcoders.in/api/domain/add', putPayload);
  }

  helloFunction() {
    alert('Good Morning');
  }
}
