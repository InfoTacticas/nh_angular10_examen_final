import { Injectable } from '@angular/core';
import { CourseCategory } from '../../interfaces/courseCategory';
import {  courseCategoriesMock } from '../../mocks/courseCategories.mock';

@Injectable({
  providedIn: 'root'
})
export class CourseCategoryMockService {

  constructor() {

  }

    getCourseCategories(): CourseCategory[]{
      return courseCategoriesMock;
    }


    getCourseCategory(id: number): CourseCategory {

      const category: CourseCategory = courseCategoriesMock.find( categoryx => categoryx.id === id );
      return category;
    }
}
