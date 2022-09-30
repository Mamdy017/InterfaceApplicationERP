import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient) { }
  api="http://localhost:8080/utilisateur/seconnecter";

  seConnecter(email:string,password:string):Observable<any>
  {
    return this.http.get(`${this.api}/${email}/${password}`);
  }
}