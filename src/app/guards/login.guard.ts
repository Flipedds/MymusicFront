import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {CookieService} from "ngx-cookie-service";



export const loginGuard: CanActivateFn = (route, state) => {
  const router: Router = new Router();
  const cookieService: CookieService = inject(CookieService);

  if (cookieService.get('login') == "true"){
    return true;
  }
  else {
    router.navigate(['/login']);
    return false;
  }
};
