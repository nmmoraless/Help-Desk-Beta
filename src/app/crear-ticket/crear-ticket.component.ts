import { Component, OnInit } from '@angular/core';//por default

import { ConsumirTicketService } from '../actualizar/consumir-ticket.service';//servicio creado
import { NewTicket, Area, Usuarios } from '../Interfaces/tickets';//interfaz importada
import { Departamento, Municipio} from '../Interfaces/departamento';//interfaz importada


@Component({
  selector: 'app-crear-ticket',//nombre del selector del componente
  templateUrl: './crear-ticket.component.html',
  styleUrls: ['./crear-ticket.component.css']
})
export class CrearTicketComponent implements OnInit {

  ingresarTicket: NewTicket = {
    id: 0,
    area: 0,//Corregir como string ---Seleccionar---
    usuario: 0,//Corregir como string ---Seleccionar---
    departamento: 0,
    municipio: 0,
    descripcion: "",
    solucion: "",
    fecha: new Date(),
    accion: "---Seleccionar---",
  }

  departamentos: Departamento = {
    id: 0,
    name: ""
  }
  
  municipios: Municipio = {
    id: 0,
    name: ""
  }
  
  listAreas: Array<Area> = [];
  listUsers: Array<Usuarios> = []
  defaultValueSelectedMun: string = "---Seleccionar---";
  defaultValueSelectedDep: string = "---Seleccionar---";
  listaDepartamentos: Array<Departamento> = [];
  departamentoSeleccionado: number = 0;
  municipioSeleccionado: number = 0;
  listaMunicipios: Array<Municipio> = [];
  
  constructor(private ticketService: ConsumirTicketService) { }

  ngOnInit(): void {
    this.obtenerDepartamentos();
    this.getAreas();
    this.getUsers();
  }

  getAreas(){
    this.ticketService.buscarAreas().subscribe(
      (data)=>{
        this.listAreas = data;
      },
      (error)=>{
        alert(error.message);
      }
    )
  }

  getUsers(){
    this.ticketService.buscarUsuarios().subscribe(
      (data)=>{
        this.listUsers = data;
      },
      (error)=>{
        alert(error.message);
      }
    )
  }

  obtenerDepartamentos(){
    this.ticketService.buscarDepartamentos().subscribe(
      (data)=>{
        this.listaDepartamentos = data;
      },
      (error)=>{
        alert(error.message);
      }
    )
    
  }

  obtenerMunicipios(){
    this.ticketService.buscarMunicipio(this.departamentoSeleccionado).subscribe(
      (data)=>{
        this.listaMunicipios = data;
      },
      (error)=>{
        alert(error.message);
      }
    ) 
  }

  onChangeDep(event: Event){
    this.departamentoSeleccionado = parseInt((<HTMLInputElement>event.target).value); 
    this.ingresarTicket.departamento = this.departamentoSeleccionado;
    this.obtenerMunicipios();
  }

  onChangeMun (event: Event){
    this.municipioSeleccionado = parseInt((<HTMLInputElement>event.target).value); 
    this.ingresarTicket.municipio = this.municipioSeleccionado;
  }

  guardarNuevoTicket(){
    console.log(this.ingresarTicket);
    this.ticketService.guardarTicket(this.ingresarTicket).subscribe(
      (data)=>{ 

      },
      (error)=>{
        alert(error.message);
      }
    )
  }

}
