import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAddSuppComponent } from './events-add-supp.component';

describe('EventsAddSuppComponent', () => {
  let component: EventsAddSuppComponent;
  let fixture: ComponentFixture<EventsAddSuppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsAddSuppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsAddSuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
