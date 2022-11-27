import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VacunasService } from '../services/vacunas.service';

import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private vacunasService: VacunasService,
    public router: Router
  ){

  }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const token:any = localStorage.getItem('token');
    
    

    //const { cedula}  = decode(token);

    
     
    

    return true;
  }
  
}
