import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Room} from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/rooms';
  }

  public findAll(): Observable<Room[]> {
    return this.http.get<Room[]>(this.usersUrl);
  }
}
