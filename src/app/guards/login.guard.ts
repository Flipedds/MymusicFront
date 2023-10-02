import {CanActivateFn, Router} from "@angular/router";
import {StorageService} from "../services/storage.service";
import {inject} from "@angular/core";

export const loginGuard: CanActivateFn = (route, state) => {
  const router: Router = new Router();
  const storageService: StorageService = inject(StorageService);

  if (storageService.getCondition()){
    return true;
  }
  else {
    router.navigate(['/login']);
    return false;
  }
};
