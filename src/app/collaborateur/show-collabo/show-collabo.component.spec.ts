import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCollaboComponent } from './show-collabo.component';

describe('ShowCollaboComponent', () => {
  let component: ShowCollaboComponent;
  let fixture: ComponentFixture<ShowCollaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCollaboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCollaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
