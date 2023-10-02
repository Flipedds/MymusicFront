import { Component } from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "filipeteste@gmail.com";
  senha: string = "9iro3ir309203rii0";

  constructor(private storageService: StorageService, private router: Router) {
  }
  sendForm(value: any) {
      if (value.email == this.email && value.password == this.senha){
        this.storageService.setCondition();
        this.router.navigate(['/']);
      }
      else{
        alert("Login ou senha incorretos!");
      }
  }
}
