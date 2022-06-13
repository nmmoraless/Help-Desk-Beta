import { Component, OnInit } from '@angular/core';
import data from 'src/assets/data/csvjson.json';

@Component({
  selector: 'app-crear-ticket',
  templateUrl: './crear-ticket.component.html',
  styleUrls: ['./crear-ticket.component.css']
})
export class CrearTicketComponent implements OnInit {

  dataColombia: any = JSON.stringify(data); 
  dataColombiaArray: Array<any> = [];
  departamentos: Array<string> = [];
  departamentosOrdenados: Array<string> = [];

  constructor() { }

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
}
