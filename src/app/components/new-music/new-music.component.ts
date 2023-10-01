import { Component } from '@angular/core';
import {Form} from "../../Form";
import {ApiService} from "../../services/api.service";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-new-music',
  templateUrl: './new-music.component.html',
  styleUrls: ['./new-music.component.css']
})
export class NewMusicComponent {

  constructor(private apiService: ApiService) {
  }
  sendForm(value: Form) {
    this.apiService.postMusic(value);
  }

  resetForm(form: NgForm){
    form.reset();
  }
}
