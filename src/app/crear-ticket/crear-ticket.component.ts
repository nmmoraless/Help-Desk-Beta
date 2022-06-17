import { Component, OnInit } from '@angular/core';//por default
import data from 'src/assets/data/csvjson.json';//importación del recurso json
import { ConsumirTicketService } from '../actualizar/consumir-ticket.service';//servicio creado

//Normalmente las interfaces se definen en un archivo aparte a fin de exportarlas y usarlas en cualquier componente
interface CrearTicket {
  id: string;
  area: string;
  responsable: string;
  departamento: string;
  municipio: string;
  descripcion: string;
  fecha: Date;
  accion: string;
}

@Component({
  selector: 'app-crear-ticket',//nombre del selector del componente
  templateUrl: './crear-ticket.component.html',
  styleUrls: ['./crear-ticket.component.css']
})
export class CrearTicketComponent implements OnInit {

  ingresarTicket: CrearTicket = {
    id: "",
    area: "",
    responsable: "",
    departamento: "",
    municipio: "",
    descripcion: "",
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
    console.log(this.municipiosOrdenados);
    return this.municipiosOrdenados = municipios.sort(); 
  }

  guardarNuevoTicket(){
    this.ticketService.guardarTicket(this.ingresarTicket).subscribe(
      (data)=>{       
        console.log(data);
      },
      (error)=>{
        alert(error.message);
      }
    )
  }

}
