import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit, AfterViewInit {
  @Input() siteTitle: string = "";

  @ViewChild('butClick')//@ViewChil importado para el uso del identificador #butClick
  butClick!: ElementRef;

  constructor() {
   }
  ngAfterViewInit(): void { //metodo que permite usar ElementRef y  butClick.nativeElement
    //throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    
  }

  darClick() {
    this.butClick.nativeElement.click();//también se puede colocando el atributo collpsed en los <a>, se soluciono con css .collapsin heigth:auto
  }

}
