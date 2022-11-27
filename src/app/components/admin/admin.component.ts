import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VacunasService } from 'src/app/services/vacunas.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private vacunasService: VacunasService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  listado(){
    this.router.navigate(['usuarios']);
  }
}
