import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cat } from '../models/cat';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService {

  constructor(private httpclient: HttpClient) { }


  getAll(): Observable<Cat[]>{
    return  this.httpclient.get<Cat[]>(`${environment.apiUrl}`);
  }

  getId(id: number): Observable<Cat>{
    return this.httpclient.get<Cat>(`${environment.apiUrl}/${id}`);
  }

  create(cat: Cat): Observable<Cat[]>{
    return this.httpclient.post<Cat[]>(`${environment.apiUrl}`, cat);
  }

  update(cat: Cat, id: number): Observable<Cat[]>{
    return this.httpclient.put<Cat[]>(`${environment.apiUrl}/${id}`, cat);
  }

  delete(id: number): Promise<any>{
    return fetch(`${environment.apiUrl}/${id}`, {
       method: 'DELETE'
    });
  }
}
