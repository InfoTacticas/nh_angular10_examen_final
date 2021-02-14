import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseContainerComponent } from './components/course-container/course-container.component';
import { InstructorContainerComponent } from './components/instructor-container/instructor-container.component';
import { CourseShortComponent } from './components/course-short/course-short.component';
import { InstructorShortComponent } from './components/instructor-short/instructor-short.component';
import { BloqueEstaticoHeaderInternoComponent } from './components/bloque-estatico-header-interno/bloque-estatico-header-interno.component';
import { FormMessageErrorComponent } from './components/form-message-error/form-message-error.component';



@NgModule({
  declarations: [CourseContainerComponent, InstructorContainerComponent, CourseShortComponent, InstructorShortComponent, BloqueEstaticoHeaderInternoComponent, FormMessageErrorComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
