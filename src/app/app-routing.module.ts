import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { CrearTicketComponent } from './crear-ticket/crear-ticket.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: "", redirectTo: '/home', pathMatch: 'full'
  },
  {path: '', component: MainComponent, children: [
    {path: 'home', component:HomeComponent},
    {path: 'crear-ticket', component:CrearTicketComponent},
    {path: 'administracion', component:DashBoardComponent},
    {path: 'actualizar', component:ActualizarComponent},
  ]},
  {
    path: "**", redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
