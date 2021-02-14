import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';

import { CourseContainerComponent } from './components/course-container/course-container.component';
import { InstructorContainerComponent } from './components/instructor-container/instructor-container.component';

import { CourseShortComponent } from './components/course-short/course-short.component';
import { CourseMockService } from './services/courses/course-mock.service';
import { FormMessageErrorComponent } from './components/form-message-error/form-message-error.component';

import { InstructorShortComponent } from './components/instructor-short/instructor-short.component';
import { InstructorMockService } from './services/instructors/instructor-mock.service';
import { BloqueEstaticoHeaderInternoComponent } from './components/bloque-estatico-header-interno/bloque-estatico-header-interno.component';
import { CourseCategoryMockService } from './services/courseCategories/course-category-mock.service';



@NgModule({
  declarations: [CourseContainerComponent,
    CourseShortComponent,
    FormMessageErrorComponent,
    InstructorContainerComponent, InstructorShortComponent,
    BloqueEstaticoHeaderInternoComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
  , exports: [
    CourseContainerComponent,
    FormMessageErrorComponent,
    InstructorContainerComponent,
    BloqueEstaticoHeaderInternoComponent
  ],
  providers: [
    CourseMockService,
    InstructorMockService,
    CourseCategoryMockService,
  ]
})
export class SharedModule { }
