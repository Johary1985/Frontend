import { Poke } from './../models/model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:5000/api';

  constructor(private httpClient: HttpClient) { }

 

  getData(): Observable <any> {

    return this.httpClient.get<Poke[]>(this.url + "/profs")

  }

  getDataID(ID: number): Observable <any> {

    return this.httpClient.get<Poke>(this.url + "/profs/" + ID)
    
  }

  deleteData(ID: string): Observable <any> {

    return this.httpClient.delete(this.url + "/profs/" + ID);

  }

  addData(poke: Poke): Observable <any> {

    return this.httpClient.post(`${this.url}/profs`, poke);
  }

  updateData(id: string|number, updateDatas: Poke): Observable<any> {

    return this.httpClient.put(`${this.url}/profs/${id}`, updateDatas);

  }
  
}
