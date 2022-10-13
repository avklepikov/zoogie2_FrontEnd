import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproachEditComponent } from './approach-edit.component';

describe('ApproachEditComponent', () => {
  let component: ApproachEditComponent;
  let fixture: ComponentFixture<ApproachEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproachEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproachEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
