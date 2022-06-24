import { Component, OnInit } from '@angular/core';//por default
import data from 'src/assets/data/csvjson.json';//importación del recurso json
import { DatePipe } from '@angular/common';

import { ConsumirTicketService } from '../actualizar/consumir-ticket.service';//servicio creado
import { Tickets } from '../Interfaces/tickets';//interfaz importada


@Component({
  selector: 'app-crear-ticket',//nombre del selector del componente
  templateUrl: './crear-ticket.component.html',
  styleUrls: ['./crear-ticket.component.css']
})
export class CrearTicketComponent implements OnInit {

  ingresarTicket: Tickets = {
    id: 0,
    area: "",
    responsable: "",
    departamento: "",
    municipio: "",
    descripcion: "",
    solucion: "",
    fecha: new Date(),
    accion: "",
  }

  dataColombia: any = JSON.stringify(data); 
  dataColombiaArray: Array<any> = [];
  departamentos: Array<string> = [];
  departamentosOrdenados: Array<string> = [];
  departamentoSeleccionado: string = "";
  municipiosOrdenados: Array<string> = [];
  
  constructor(private ticketService: ConsumirTicketService) { }

  ngOnInit(): void {
    this.leerJson();
    this.dataColombiaArray.forEach((element) => {
      if(this.departamentos.indexOf(element.DEPARTAMENTO) == -1){
        this.departamentos.push(element.DEPARTAMENTO);
      }
    })
    this.departamentosOrdenados = this.departamentos.sort();
  }
  public leerJson():void{   
    this.dataColombiaArray = (JSON.parse(this.dataColombia));  
  }

  onChange(event: Event){
    this.departamentoSeleccionado = (<HTMLInputElement>event.target).value;
    this.municipiosOrdenados.splice(0, this.municipiosOrdenados.length);
    let municipios: Array<string> = [];
    
    for (let index = 0; index <= this.departamentos.length; index++) {
      for (let i = 0; i < this.dataColombiaArray.length; i++) {
        if((`${index}${this.dataColombiaArray[i].DEPARTAMENTO}`) === this.departamentoSeleccionado.replace(": ","")){
          console.log(this.dataColombiaArray[i].DEPARTAMENTO);
          municipios.push(this.dataColombiaArray[i].MUNICIPIO);
        }    
      }
    }
    //console.log(this.municipiosOrdenados);
    return this.municipiosOrdenados = municipios.sort(); 
  }

  guardarNuevoTicket(){
    this.ticketService.guardarTicket(this.ingresarTicket).subscribe(
      (data)=>{    
      },
      (error)=>{
        alert(error.message);
      }
    )
  }

}
