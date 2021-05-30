import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pack} from '../models/pack';
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/clients';
  }

  public findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.usersUrl);
  }

  public getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.usersUrl}/${id}`);
  }
}
