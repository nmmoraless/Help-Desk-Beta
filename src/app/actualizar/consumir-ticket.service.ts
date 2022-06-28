import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tickets, Area, EstadoTicket, Usuarios } from '../Interfaces/tickets';
import { Departamento, Municipio } from '../Interfaces/departamento';

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

  buscarDepartamentos(id: number = 0){
    return this.http.get<Array<Departamento>>(`https://localhost:7086/Ubicaciones?id=${id}`);
  }

  buscarMunicipio(id: number = 0){
    return this.http.get<Array<Municipio>>(`https://localhost:7086/Ubicaciones?id=${id}`);
  }

  buscarAreas(){
    return this.http.get<Array<Area>>(`https://localhost:7086/Areas`);
  }

  buscarStatusTicket(){
    return this.http.get<Array<EstadoTicket>>(`https://localhost:7086/Status`);
  }

  buscarUsuarios(){
    return this.http.get<Array<Usuarios>>(`https://localhost:7086/Usuarios`);
  }
  
}
