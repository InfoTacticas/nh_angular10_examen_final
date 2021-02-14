import { Injectable } from '@angular/core';
import { Course } from '../../interfaces/course';
import {  coursesMock } from '../../mocks/courses.mock';

@Injectable({
  providedIn: 'root'
})
export class CourseMockService {

  constructor() {

  }

    getCourses(): Course[]{
      return coursesMock;
    }

    getFeaturedCourses(): Course[]{
      const featureCourses: Course[] = coursesMock.filter( course => course.featured === true );
      return featureCourses;
    }

    getCourse(id: number): Course {

      const course: Course = coursesMock.find( coursex => coursex.id === id );
      return course;
    }

    getTotalCourseByInstructor(id: number): number {

      const courses: Course[] = coursesMock.filter( coursex => coursex.instructor === id );
      return courses.length;
    }
}
