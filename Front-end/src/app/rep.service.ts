import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rep } from './reps/reps';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json',
    'x-access-token': localStorage.getItem('TOKEN')})
};
@Injectable({
  providedIn: 'root'
})
export class RepService {

  constructor(private http: HttpClient) { }
  getReps(): Observable<Rep[]>{
    return this.http.get<Rep[]>('http://localhost:8080/reps',httpOptions);
  }
  atualizarRep(rep: Rep): Observable<any> {
    return this.http.put('http://localhost:8080/reps/alterOneRep', rep, httpOptions);
  }
  apagarRep(rep: Rep): Observable<any> {
    return this.http.delete('http://localhost:8080/reps/deleteOneRep/name?eq=' + rep.name, httpOptions);
  }
  adicionar(rep: Rep): Observable<any> {
    return this.http.post('http://localhost:8080/reps/insertOneRep', rep, httpOptions);
  }
  


}
