import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumirTicketService } from './consumir-ticket.service';

interface Tickets {
  id?: string;
  area: string;
  responsable: string;
  departamento: string;
  municipio: string;
  descripcion: string;
  solucion?: string;
  fecha: string;
  accion: string;
}
@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})

export class ActualizarComponent implements OnInit {
  
   ticket: Tickets = {
    id: "",
    area: "",
    responsable: "",
    departamento: "",
    municipio: "",
    descripcion: "",
    solucion: "",
    fecha: "",
    accion: ""
  }

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
    this.ticketService.buscarTicket().subscribe(
      (data)=>{
        this.dashboardList = data;
        for (let i = 0; i < this.dashboardList.length; i++) {
          if(this.dashboardList[i].id == this.paramsId.id){
            // this.ticket.area = this.dashboardList[i].area;
            // this.ticket.responsable = this.dashboardList[i].responsable;
            // this.ticket.departamento = this.dashboardList[i].departamento;
            // this.ticket.municipio = this.dashboardList[i].municipio;
            // this.ticket.descripcion = this.dashboardList[i].descripcion;
            // this.ticket.solucion = this.dashboardList[i].solucion;
            // this.ticket.fecha = new Date(this.dashboardList[i].fecha).toLocaleDateString('en-CA');
            // this.ticket.accion = this.dashboardList[i].accion;  
            this.ticket = this.dashboardList[i];
            this.ticket.fecha = new Date(this.dashboardList[i].fecha).toLocaleDateString('en-CA');
          }       
        }
        console.log(this.ticket);
      },
      (error)=>{
        alert(error.message);
      }
    )
  }

  updateData(){
    this.ticket.id = this.paramsId.id;
    this.ticketService.actualizarTicket(this.ticket,this.paramsId.id).subscribe(
      (data)=>{
        this.dashboardList = data;
      },
      (error)=>{
        alert(error.message);
      }
    )
  }
}




