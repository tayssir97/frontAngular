import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationuserComponent } from './donationuser.component';

describe('DonationuserComponent', () => {
  let component: DonationuserComponent;
  let fixture: ComponentFixture<DonationuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
