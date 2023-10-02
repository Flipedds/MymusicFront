import { Component } from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private storageService: StorageService, private router: Router) {
  }
  logout() {
    this.storageService.removeCondition();
    this.router.navigate(['/login']);
  }
}
