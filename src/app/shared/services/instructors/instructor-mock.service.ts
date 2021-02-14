import { Injectable } from '@angular/core';
import { Instructor } from '../../interfaces/instructor';
import {  instructorsMock } from '../../mocks/instructors.mock';

@Injectable({
  providedIn: 'root'
})
export class InstructorMockService {

  constructor() {

  }

    getInstructors(): Instructor[]{
      return instructorsMock;
    }


    getInstructor(id: number): Instructor {

      const instructor: Instructor = instructorsMock.find( instructorx => instructorx.id === id );
      return instructor;
    }
}
