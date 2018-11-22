import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rep } from './reps/reps';

@Injectable({
  providedIn: 'root'
})
export class RepService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<Rep[]>{
    return this.http.get<Rep[]>('http://localhost:8080/reps');
  }


}
