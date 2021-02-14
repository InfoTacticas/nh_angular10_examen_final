import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BloqueEstaticoHeaderHomeComponent } from './components/bloque-estatico-header-home/bloque-estatico-header-home.component';


@NgModule({
  declarations: [HomePageComponent, BloqueEstaticoHeaderHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
