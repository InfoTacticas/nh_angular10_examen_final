import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';

import { LeaveMessageComponent } from './components/leave-message/leave-message.component';


@NgModule({
  declarations: [ContactUsPageComponent, LeaveMessageComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ContactModule { }
