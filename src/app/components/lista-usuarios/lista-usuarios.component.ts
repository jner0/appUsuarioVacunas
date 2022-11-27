import { Component, OnInit } from '@angular/core';
import { VacunasService } from 'src/app/services/vacunas.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  arrUsers: any = [];

  constructor( private vacunasService: VacunasService) { }

  async ngOnInit(): Promise <void> {
    let response = await this.vacunasService.getAll();
    this.arrUsers = response.data;
  }

}
