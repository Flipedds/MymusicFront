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
  constructor(private apiService: ApiService) {
    this.getMusic();
  }
  getMusic(){
    this.apiService.getDataFromAPI().subscribe((music) => (this.musics = music));
    console.log(this.musics);
  }
}
