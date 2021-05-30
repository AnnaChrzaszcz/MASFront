import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pack} from '../models/pack';

@Injectable({
  providedIn: 'root'
})
export class PackService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/packs';
  }

  public findAll(): Observable<Pack[]> {
    return this.http.get<Pack[]>(this.usersUrl);
  }
}

