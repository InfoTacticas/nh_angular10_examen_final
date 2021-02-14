import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '',
          loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
        },
        {
          path: 'courses',
          loadChildren: () => import('../courses/courses.module').then(m => m.CoursesModule)
        },
        {
          path: 'contact',
          loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule)
        },
      ]
    },
    {
      path: 'admin',
      children: [
        {
          path: '',
          loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
        },
      ]
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
