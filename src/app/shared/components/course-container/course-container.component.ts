import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../interfaces/course';
import { CourseMockService } from '../../services/courses/course-mock.service';
import { Instructor } from '../../interfaces/instructor';
import { InstructorMockService } from '../../services/instructors/instructor-mock.service';

@Component({
  selector: 'app-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.scss']
})

export class CourseContainerComponent implements OnInit {

  @Input() isFeatured = false;
  @Input() showBooks = 3;
  classShowBook: number;

  courses: Course[];

  constructor(
    private courseService: CourseMockService,
    private instructorService: InstructorMockService
  ) { }

  ngOnInit(): void {
    // cuando el listado de libros cargue, obtener el listado de libros.
   this.fetchCourses();
   this.classShowBook = 12 / this.showBooks;
  }

  fetchCourses(): void {

    this.courses = this.isFeatured ? this.courseService.getFeaturedCourses() : this.courseService.getCourses();

  }

  getInstructorName(id: number): string {
    const myInstructor: Instructor = this.instructorService.getInstructor(id);
    let name: string;
    if (myInstructor == null){
      name = '';
    }
    else{
      name = myInstructor.name + ' ' + myInstructor.lastName;
    }
    return name;
  }

}
