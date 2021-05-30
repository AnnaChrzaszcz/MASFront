import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../models/client';
import {CulinaryWorkshop} from '../models/culinaryWorkshop';

@Injectable({
  providedIn: 'root'
})
export class CulinaryWorkshopService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/culinaryWorkshops';
  }

  public findAll(): Observable<CulinaryWorkshop[]> {
    return this.http.get<CulinaryWorkshop[]>(this.usersUrl);
  }

}
