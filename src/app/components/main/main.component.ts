import { Component } from '@angular/core';
import {Music} from "../../Music";
import {ApiService} from "../../services/api.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  musics: Music[] = [];
  selectMusic: any = null;
  newMusic: boolean = false;
  constructor(private apiService: ApiService) {
    this.getMusic();
  }
  getMusic(){
    this.apiService.getDataFromAPI().subscribe((music) => (this.musics = music));
    console.log(this.musics);
  }

  removeMusic(id: number) {
    this.apiService.removeMusic(id);
  }

  selecionarMusica(musica: Music){
    this.selectMusic = musica;
  }

  atualizarMusica(){
    this.apiService.updateMusic(this.selectMusic);
    this.cancelarAtualizacao();
  }


  cancelarAtualizacao(){
    this.selectMusic = null;
  }

  novaMusica(){
      if(this.newMusic === false){
        this.newMusic = true;
      }
      else {
        this.newMusic = false;
      }
    }

}
