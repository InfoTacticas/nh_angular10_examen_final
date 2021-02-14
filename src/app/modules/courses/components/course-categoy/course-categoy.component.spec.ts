import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCategoyComponent } from './course-categoy.component';

describe('CourseCategoyComponent', () => {
  let component: CourseCategoyComponent;
  let fixture: ComponentFixture<CourseCategoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCategoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCategoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
