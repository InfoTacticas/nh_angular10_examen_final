import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { LayoutAdminComponent } from './pages/layout-admin/layout-admin.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SuscribeFormComponent } from './components/suscribe-form/suscribe-form.component';


@NgModule({
  declarations: [LayoutComponent, LayoutAdminComponent, HeaderComponent, FooterComponent, SuscribeFormComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
