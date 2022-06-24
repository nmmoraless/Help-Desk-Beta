import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConsumirTicketService } from './consumir-ticket.service';
import { Tickets } from '../Interfaces/tickets';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})

export class ActualizarComponent implements OnInit {
  
   ticket: Tickets = {
    id: 0,
    area: "",
    responsable: "",
    departamento: "",
    municipio: "",
    descripcion: "",
    solucion: "",
    fecha: new Date,
    accion: ""
  }
  fechaTicketInput : string ='';
  dashboardList: any = [];
  paramsId: any = "";

  constructor(private router: Router, private ticketService: ConsumirTicketService, private paramsRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramsId = this.paramsRoute.snapshot.params;
    this.getData();
  }
  cancelar(){
    this.router.navigateByUrl('/administracion');
  }

  getData(){
    this.ticketService.buscarTicket(this.paramsId.id).subscribe(
      (data)=>{
        this.ticket = data[0];
        this.fechaTicketInput = new Date(this.ticket.fecha).toLocaleDateString('en-CA');
        console.log(this.fechaTicketInput);
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




