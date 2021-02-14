import { Component, OnInit, Input } from '@angular/core';
import { Instructor } from '../../interfaces/instructor';
import { CourseMockService } from '../../services/courses/course-mock.service';

@Component({
  selector: 'app-instructor-short',
  templateUrl: './instructor-short.component.html',
  styleUrls: ['./instructor-short.component.scss']
})
export class InstructorShortComponent implements OnInit {

  @Input() instructor: Instructor;
  totalCourses: number;
  constructor(
    private courseService: CourseMockService
  ) { }

  ngOnInit(): void {
    this.totalCourses = this.courseService.getTotalCourseByInstructor(this.instructor.id);
  }

}

