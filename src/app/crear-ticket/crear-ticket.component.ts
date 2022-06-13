import { Component, OnInit } from '@angular/core';
import data from 'src/assets/data/csvjson.json';

@Component({
  selector: 'app-crear-ticket',
  templateUrl: './crear-ticket.component.html',
  styleUrls: ['./crear-ticket.component.css']
})
export class CrearTicketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.firstWay();
  }
  public firstWay():void{
    let dataColombia: any = JSON.stringify(data);    
    console.log(JSON.parse(dataColombia));    
  }
}
