import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConsumirTicketService } from './consumir-ticket.service';
import { Tickets, Area, EstadoTicket, Usuarios } from '../Interfaces/tickets';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})

export class ActualizarComponent implements OnInit {
  
  ticket: Tickets = {
    id: 0,
    area: "",
    usuario: "",
    departamento: "",
    municipio: "",
    descripcion: "",
    solucion: "",
    fecha: new Date,
    accion: ""
  }

  areas: Area = {
    id: 0,
    name: ""
  }

  statusTicket: EstadoTicket = {
    id: 0,
    name: ""
  }

  usuarios: Usuarios = {
    id: 0,
    usuario: ""
  }

  fechaTicketInput : string ='';
  dashboardList: any = [];
  listAreas: Array<Area> = [];
  listStatusTicket: Array<EstadoTicket> = [];
  listUsers: Array<Usuarios> = []
  paramsId: any = "";

  constructor(private router: Router, private ticketService: ConsumirTicketService, private paramsRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramsId = this.paramsRoute.snapshot.params;
    this.getData();
    this.getAreas();
    this.getStatusTicket();
    this.getUsers();
  }
  cancelar(){
    this.router.navigateByUrl('/administracion');
  }

  getData(){
    this.ticketService.buscarTicket(this.paramsId.id).subscribe(
      (data)=>{
        this.ticket = data[0];
        this.fechaTicketInput = new Date(this.ticket.fecha).toLocaleDateString('en-CA');
      },
      (error)=>{
        alert(error.message);
      }
    )
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

  getStatusTicket(){
    this.ticketService.buscarStatusTicket().subscribe(
      (data)=>{
        this.listStatusTicket = data;
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

  updateData(){
    this.ticket.id = this.paramsId.id;
    this.ticket.fecha = new Date(this.fechaTicketInput); 
    this.ticketService.actualizarTicket(this.ticket, parseInt(this.paramsId.id)).subscribe(
      (data)=>{
        this.dashboardList = data;
        this.cancelar();
      },
      (error)=>{
        alert(error.message);
      }
    )
  }
}




