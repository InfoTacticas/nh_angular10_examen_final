import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueEstaticoHeaderHomeComponent } from './bloque-estatico-header-home.component';

describe('BloqueEstaticoHeaderHomeComponent', () => {
  let component: BloqueEstaticoHeaderHomeComponent;
  let fixture: ComponentFixture<BloqueEstaticoHeaderHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueEstaticoHeaderHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueEstaticoHeaderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
