import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';

const routes: Routes = [
    {
      path: '',
      component: ContactUsPageComponent
    }
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
