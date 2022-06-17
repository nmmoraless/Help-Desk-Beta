import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ConsumirTicketService {

  constructor(public http: HttpClient) { }

  buscarTicket(){
    return this.http.get(`http://localhost:5012/Ticket`);
  }

  guardarTicket(ingresarTicket: any){
    return this.http.post(`http://localhost:5012/Ticket`,ingresarTicket);
  }

  actualizarTicket(actualizarTicket: any, idParams: any){
    return this.http.put(`http://localhost:5012/Ticket?id=${idParams}`,actualizarTicket);
  }

  deleteTicket(id: string){
    return this.http.delete(`http://localhost:5012/Ticket?id=${id}`);
  }

}
