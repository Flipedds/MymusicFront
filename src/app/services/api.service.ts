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
          alert("Música Adicionada!");

      },
      (error) => {
        console.error("Erro ao enviar o formulário:", error);
        alert("erro ao enviar !");
      }
    )
  }

  removeMusic(id: number){
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(
      (response) =>{
        alert("Música Removida!");
      },
      (error) => {
        console.error("Erro ao enviar o formulário:", error);
        alert("erro ao enviar !");
      }
    )
  }

  updateMusic(music: any){
    const headers = { 'Content-Type': 'application/json' };
    const id = music.id;
    delete music.id;

    this.http.put(`${this.apiUrl}/${id}`, JSON.stringify(music), {headers}).subscribe(
      (response) => {
          alert("Música atualizada!");

      },
      (error) => {
        console.error("Erro ao enviar o formulário:", error);
        alert("erro ao enviar !");
      }
    )
  }
}
