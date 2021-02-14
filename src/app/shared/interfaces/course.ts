import { languageCode } from '../types';

export interface Course {
    id: number;
    name: string;
    featured: boolean;
    image: string;
    language: languageCode;
    price: number;
    duration: number;
    lessons: number;
    deadline: string;
    students: number;
    summary: string;
    instructor: number;
    category: number;

}
