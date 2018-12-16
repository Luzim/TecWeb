import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './users/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    
    return this.http.post<User>('http://localhost:8080/login/login', {
      email: email,
      password: password
    }, httpOptions);
    
  }
  cadastrar(user: User): Observable<any> {

    return this.http.post('http://localhost:8080/login/insertOneusuario', user, httpOptions)
  }
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8080/login/get',httpOptions);
  }
}
