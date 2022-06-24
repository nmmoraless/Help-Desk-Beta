import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tickets } from '../Interfaces/tickets';

@Injectable({
  providedIn: 'root'
})

export class ConsumirTicketService {

  constructor(public http: HttpClient) { }

  buscarTicket(id: number = 0){
    return this.http.get<Array<Tickets>>(`https://localhost:7086/Ticket?id=${id}`);
  }

  guardarTicket(ingresarTicket: any){
    return this.http.post(`https://localhost:7086/Ticket`,ingresarTicket);
  }

  actualizarTicket(actualizarTicket: any, idParams: any){
    return this.http.put(`https://localhost:7086/Ticket?id=${idParams}`,actualizarTicket);
  }

  deleteTicket(id: string){
    return this.http.delete(`https://localhost:7086/Ticket?id=${id}`);
  }

}
