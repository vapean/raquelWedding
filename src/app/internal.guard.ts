import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternalGuard implements CanActivate {

  constructor(
    private router: Router) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkPermission();
  }

  checkPermission(): boolean {

    if (localStorage.getItem('islogged') === 'true') {
      return true;
    } else {
      this.router.navigate(['error']);
      return false;
    }

  }

}
