import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BloqueEstaticoHeaderHomeComponent } from './components/bloque-estatico-header-home/bloque-estatico-header-home.component';


@NgModule({
  declarations: [HomePageComponent, BloqueEstaticoHeaderHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
