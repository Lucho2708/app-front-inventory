import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/users`);
  }
  gerUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/user/${id}`);
  }
  createUsers(user: User): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/users/create`, user);
  }
  deleteUsers(id: string): Observable<User> {
    return this.http.delete<User>(`${this.BASE_URL}/users/delete?id=${id}`);
  }
  updateUsers(id: string, user: User): Observable<User> {
    return this.http.patch<User>(`${this.BASE_URL}/users/update?id=${id}`, user);
  }
}
