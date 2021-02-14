import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueEstaticoHeaderInternoComponent } from './bloque-estatico-header-interno.component';

describe('BloqueEstaticoHeaderInternoComponent', () => {
  let component: BloqueEstaticoHeaderInternoComponent;
  let fixture: ComponentFixture<BloqueEstaticoHeaderInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueEstaticoHeaderInternoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueEstaticoHeaderInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
