import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Music} from "../Music";
import {Observable} from "rxjs";
import {Form} from "../Form";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private apiUrl = 'http://localhost:5170/musics';
  constructor(private http: HttpClient) {}

  getDataFromAPI(): Observable<Music[]> {
    return this.http.get<Music[]>(this.apiUrl);
  }

  postMusic(value: Form){
    const headers = { 'Content-Type': 'application/json' };
    this.http.post(`${this.apiUrl}`, JSON.stringify(value), {headers}).subscribe(
      (response) => {
          console.log(response);

      },
      (error) => {
        console.error("Erro ao enviar o formulário:", error);
      }
    )
  }

  removeMusic(id: number){
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(
      (response) =>{
        console.log(response);
      },
      (error) => {
        console.error("Erro ao enviar o formulário:", error);
      }
    )
  }
}
