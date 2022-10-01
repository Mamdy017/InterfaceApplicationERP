import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tirage } from 'src/app/modeles/tirage/tirage';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})

export class TirageService {

  api="http://localhost:8080";

  constructor(private http: HttpClient) {
   }

   postTirage(libelleListe:string, libelleActivite:string, tirage:Tirage):Observable<any>{

    return this.http.post<Tirage>(`${this.api}/tirage/ajouter/${libelleListe}/${libelleActivite}`, tirage);
   }


   addListe(libelleListe:string, libelleActivite:string, file:any):Observable<any>{
      
    let data = new FormData();

      data.append("file", file);
     


      console.log("service: " + libelleListe)
      console.log(libelleActivite)
      console.log(`http://localhost:8080/postulant/import/excel/${libelleListe}/${libelleActivite}`, data)


      if(file==null){
        console.log("je suis nullllllllllllllllllll")
      }

      return this.http.post<any>(`http://localhost:8080/postulant/import/excel/${libelleListe}/${libelleActivite}`, data);
   
    }

}
