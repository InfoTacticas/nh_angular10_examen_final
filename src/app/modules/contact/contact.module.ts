import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ContactUsPageComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
