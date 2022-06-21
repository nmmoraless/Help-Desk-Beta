import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ConsumirTicketService {

  constructor(public http: HttpClient) { }

  buscarTicket(){
    return this.http.get(`https://localhost:7086/Ticket`);
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
