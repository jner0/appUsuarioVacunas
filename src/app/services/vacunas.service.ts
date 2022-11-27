import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacunasService {

  private URL = 'http://localhost:3000/'

  constructor(private httpClient: HttpClient, private jwtHelper: JwtHelperService) { 
  
  }

  signIn(user: any){
    return this.httpClient.post(`${this.URL}api/users/login`, user);
  }

  isAuth(): boolean{
    const token:any = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }

  getAll() : Promise<any>{
    return lastValueFrom(this.httpClient.get<any>(`${this.URL}api/admin/`));
  }
}
