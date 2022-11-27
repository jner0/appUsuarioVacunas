import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VacunasService } from 'src/app/services/vacunas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    userName: '',
    pass: ''
  }
  

  constructor(
    private vacunasService: VacunasService,
    private router: Router
    ) {

   }

  ngOnInit(): void {
  }

  logIn(){
    console.log(this.user);
    this.vacunasService.signIn(this.user).subscribe( (res:any) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['private']);
    });
  }

}
