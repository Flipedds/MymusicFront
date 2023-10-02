import {CanActivateFn, Router} from "@angular/router";
export const loginGuard: CanActivateFn = (route, state) => {
  const router: Router = new Router();
  if (localStorage.getItem('login') === 'true'){
    return true;
  }
  else {
    router.navigate(['/login']);
    return false;
  }
};
