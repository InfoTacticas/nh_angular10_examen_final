import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';


import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { LayoutComponent } from './pages/layout/layout.component';
import { LayoutAdminComponent } from './pages/layout-admin/layout-admin.component';
import { SuscribeFormComponent } from './components/suscribe-form/suscribe-form.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent, LayoutAdminComponent, SuscribeFormComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class LayoutModule { }
