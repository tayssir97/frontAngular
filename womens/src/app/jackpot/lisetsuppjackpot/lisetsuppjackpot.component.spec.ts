import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisetsuppjackpotComponent } from './lisetsuppjackpot.component';

describe('LisetsuppjackpotComponent', () => {
  let component: LisetsuppjackpotComponent;
  let fixture: ComponentFixture<LisetsuppjackpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisetsuppjackpotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisetsuppjackpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
