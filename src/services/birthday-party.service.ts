import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BirthdayPerson} from '../models/birthdayPerson';
import {BirthdayParty} from '../models/birthdayParty';

@Injectable({
  providedIn: 'root'
})
export class BirthdayPartyService {
  private usersUrl: string;
  newParty: BirthdayParty;
  newBirthdayParty: Observable<BirthdayParty>;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/birthdayParties';
  }

  public findAll(): Observable<BirthdayParty[]> {
    return this.http.get<BirthdayParty[]>(this.usersUrl);
  }
  public storeData(birthdayParty: Observable<BirthdayParty>) {
    this.newBirthdayParty = birthdayParty;
  }

  public checkDate(date: Date) {
    return this.http.get<boolean>(`${this.usersUrl}/date`);
  }

  public retrieveData(): Observable<BirthdayParty> {
    return this.newBirthdayParty;
  }

  public addBirthdayParty(party: BirthdayParty): Observable<BirthdayParty> {
    return this.http.post<BirthdayParty>(this.usersUrl, party);
  }
}
