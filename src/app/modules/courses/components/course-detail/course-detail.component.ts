import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course';

import { CourseMockService } from 'src/app/shared/services/courses/course-mock.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  @Input() courseId: number;
  course: Course;
  constructor(
    private courseMockService: CourseMockService

  ) {

  }

  ngOnInit(): void {
    this.fethBook();
  }

  fethBook(): void{
    this.course = this.courseMockService.getCourse(this.courseId);
  }

}
