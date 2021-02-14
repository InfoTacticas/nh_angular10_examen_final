import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.scss']
})
export class CourseDetailPageComponent implements OnInit {

  courseId: number;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.courseId = this.getBookId(params);
        console.log(`El parámetro es: `, params);
      }
    );
    // proporciona un observble asincrono y hay que suscribirse
  }

  getBookId(params: Params): number{
    return Number(params.id);
  }

}
