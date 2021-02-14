import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseListPageComponent } from './pages/course-list-page/course-list-page.component';
import { CourseDetailPageComponent } from './pages/course-detail-page/course-detail-page.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseCategoyComponent } from './components/course-categoy/course-categoy.component';


@NgModule({
  declarations: [CourseListPageComponent, CourseDetailPageComponent, CourseDetailComponent, CourseCategoyComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
