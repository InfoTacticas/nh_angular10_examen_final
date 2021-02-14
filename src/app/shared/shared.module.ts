import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseContainerComponent } from './components/course-container/course-container.component';
import { InstructorContainerComponent } from './components/instructor-container/instructor-container.component';



@NgModule({
  declarations: [CourseContainerComponent, InstructorContainerComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
