import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseListPageComponent } from './pages/course-list-page/course-list-page.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';


@NgModule({
  declarations: [CourseListPageComponent, CourseDetailPageComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
