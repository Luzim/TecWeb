import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './users/user'
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json',
    'x-access-token': localStorage.getItem('TOKEN')})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8080/users',httpOptions);
  }
  atualizarUser(user: User): Observable<any> {
    return this.http.put('http://localhost:8080/users/alterOneUser', user, httpOptions);
  }
  apagarUser(user: User): Observable<any> {
    return this.http.delete('http://localhost:8080/users/deleteOneUser/nickname?eq=' + user.nickname, httpOptions);
  }
  adicionar(user: User): Observable<any> {
    return this.http.post('http://localhost:8080/users/insertOne', user, httpOptions);
  }
}
