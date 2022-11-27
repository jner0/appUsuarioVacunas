import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VacunasService } from '../services/vacunas.service';

@Injectable({
  providedIn: 'root'
})
export class Guard1Guard implements CanActivate {

  constructor(
    private vacunasService: VacunasService,
    private router: Router
  ){

  }

  canActivate(): boolean {

    if(!this.vacunasService.isAuth()){
      console.log('Token no valido o ya expiró');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  
}
