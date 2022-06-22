import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumirTicketService } from '../actualizar/consumir-ticket.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  dashboardList: any = [];
  paramBusqueda: string = "";
  modificarTicket: string = "";//Trae el Id del ticket a visualizar o modificar

  constructor(private router:Router, private ticketService: ConsumirTicketService) {
    
   }

  ngOnInit(): void {
    this.getData();
  }

  editar(id: string){
    this.modificarTicket = id;
    this.router.navigateByUrl('/actualizar/'+this.modificarTicket);
  }

  getData(){
    this.ticketService.buscarTicket().subscribe(
      (data)=>{
        this.dashboardList = data;
      },
      (error)=>{
        alert(error.message);
      }
    )
    
  }

  deleteData(){
    this.ticketService.deleteTicket(this.modificarTicket).subscribe(
      (data)=>{
        this.getData();//Retorna la información actualizada de la base de datos

      },
      (error)=>{
        alert(error.message);
      }
    )
  }
}
