import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pack} from '../models/pack';
import {BirthdayPerson} from '../models/birthdayPerson';

@Injectable({
  providedIn: 'root'
})
export class BirthdayPersonService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/birthdayPersons';
  }

  public findAll(): Observable<BirthdayPerson[]> {
    return this.http.get<BirthdayPerson[]>(this.usersUrl);
  }

  public addBirthdayPerson(person: BirthdayPerson): Observable<BirthdayPerson> {
    return this.http.post<BirthdayPerson>(this.usersUrl, person);
  }
}
