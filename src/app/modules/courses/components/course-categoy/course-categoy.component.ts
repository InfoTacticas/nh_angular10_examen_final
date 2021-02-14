import { Component, Input, OnInit } from '@angular/core';
import { CourseCategory } from 'src/app/shared/interfaces/courseCategory';

import { CourseCategoryMockService } from 'src/app/shared/services/courseCategories/course-category-mock.service';

@Component({
  selector: 'app-course-categoy',
  templateUrl: './course-categoy.component.html',
  styleUrls: ['./course-categoy.component.scss']
})
export class CourseCategoyComponent implements OnInit {

  courseCategories: CourseCategory[];
  constructor(
    private courseCategoryMockService: CourseCategoryMockService

  ) {

  }

  ngOnInit(): void {
    this.fethCourse();
  }

  fethCourse(): void{
    this.courseCategories = this.courseCategoryMockService.getCourseCategories();
  }

}


