import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { FooterComponent } from './footer/footer.component';
import { CrearTicketComponent } from './crear-ticket/crear-ticket.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ActualizarComponent } from './actualizar/actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    NavHeaderComponent,
    FooterComponent,
    CrearTicketComponent,
    DashBoardComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
