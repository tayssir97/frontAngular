import {Component, Inject, OnInit} from '@angular/core';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {Events} from '../../model/events';
import {Router} from '@angular/router';
import {EventsService} from '../../service/char+event/events.service';

@Component({
  selector: 'app-events-add-supp',
  templateUrl: './events-add-supp.component.html',
  styleUrls: ['./events-add-supp.component.css']
})
export class EventsAddSuppComponent implements OnInit {

  envents: Events[] = [];
  fromDate: NgbDate;
  toDate: NgbDate;
  hoveredDate: NgbDate;
  model1: NgbDate;
  model2: NgbDate;
  even: Events = new Events();
  focus: any;
  fileU: File;
  focus1: any;
  constructor(calendar: NgbCalendar, private addeventService: EventsService, private routeur: Router) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }
  add() {
    if (this.model2 != null) {
      this.even.dateD = new  Date(this.model2.year, this.model2.month -  1, this.model2.day); }
    if (this.model1 != null) {
      this.even.dateF = new  Date(this.model1.year, this.model1.month - 1, this.model1.day); }

    console.log(this.even);
    this.addeventService.add(this.even, this.fileU).subscribe(res => {
      console.log(res);
    });
  }
  private getevents() {
    this.addeventService.geteventList().subscribe(data => {
      console.log(data);
      this.envents = data; });
  }
  remove(idE: any) {
    this.addeventService.remove(idE).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }
ngOnInit(): void {
    this.even = new Events();
  this.envents = [];

  this.getevents();
  }
  isRangeStart(date: NgbDate) {
    return this.model1 && this.model2 && date.equals(this.model1);
  }

  isRangeEnd(date: NgbDate) {
    return this.model1 && this.model2 && date.equals(this.model2);
  }

  isInRange(date: NgbDate) {
    return date.after(this.model1) && date.before(this.model2);
  }

  isActive(date: NgbDate) {
    return date.equals(this.model1) || date.equals(this.model2);
  }

  endDateChanged(date) {
    // tslint:disable-next-line:max-line-length
    if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
      this.model1 = this.model2;
    }
  }

  // tslint:disable-next-line:max-line-length
  startDateChanged(date) {if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month
        || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
      this.model2 = this.model1;
    }
  }
  mama($event: Event) {
  }
  onFileChange(event) {
    this.fileU = event.target.files.item(0);
  }
}

