import { Component, OnInit } from '@angular/core';
import {Events} from '../model/events';
import {EventsService} from '../service/char+event/events.service';
import {Router} from '@angular/router';
import {Jackpot} from '../model/jackpot';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
envents: Events[] = [];
constructor(private eventsservice: EventsService) { }
private getevents() {
    this.eventsservice.geteventList().subscribe(data => {
        console.log(data);
        this.envents = data; });
}
    ngOnInit(): void {
        this.getevents();
    }
}
