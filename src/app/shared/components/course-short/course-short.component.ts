import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../interfaces/course';
@Component({
  selector: 'app-course-short',
  templateUrl: './course-short.component.html',
  styleUrls: ['./course-short.component.scss']
})
export class CourseShortComponent implements OnInit {

  @Input() course: Course;
  @Input() instructorName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
