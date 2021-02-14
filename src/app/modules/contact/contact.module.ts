import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';


@NgModule({
  declarations: [ContactUsPageComponent],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
