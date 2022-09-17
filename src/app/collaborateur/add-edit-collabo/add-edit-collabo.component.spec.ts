import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCollaboComponent } from './add-edit-collabo.component';

describe('AddEditCollaboComponent', () => {
  let component: AddEditCollaboComponent;
  let fixture: ComponentFixture<AddEditCollaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCollaboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCollaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
