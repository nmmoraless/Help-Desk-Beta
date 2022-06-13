import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancelar(){
    this.router.navigateByUrl('/administracion');
  }

}
