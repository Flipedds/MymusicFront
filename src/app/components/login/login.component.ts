import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "filipeteste@gmail.com";
  senha: string = "12345";

  constructor(private router: Router, private cookieService: CookieService) {
  }
  sendForm(value: any) {
      if (value.email == this.email && value.password == this.senha){
        this.cookieService.set('login', 'true', 5 / (24 * 60), '/', '', true, 'Lax');
        this.router.navigate(['/']);
      }
      else{
        alert("Login ou senha incorretos!");
      }
  }
}
