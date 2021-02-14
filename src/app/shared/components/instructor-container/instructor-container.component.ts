import { Component, OnInit, InputDecorator, Input } from '@angular/core';
import { Instructor } from '../../interfaces/instructor';
import { InstructorMockService } from '../../services/instructors/instructor-mock.service';


@Component({
  selector: 'app-instructor-container',
  templateUrl: './instructor-container.component.html',
  styleUrls: ['./instructor-container.component.scss']
})
export class InstructorContainerComponent implements OnInit {

  @Input() isFeatured = false;
  @Input() showInstructor = 4;
  classShowInstructor: number;

  instructors: Instructor[];

  constructor(
    private instructorService: InstructorMockService
  ) { }

  ngOnInit(): void {
    // cuando el listado de libros cargue, obtener el listado de libros.
   this.fetchInstructors();
   this.classShowInstructor = 12 / this.showInstructor;
  }

  fetchInstructors(): void {

    this.instructors = this.instructorService.getInstructors();

  }

}
