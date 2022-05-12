import { Component, OnInit } from '@angular/core';
import {JackpotService} from '../../service/char+event/jackpot.service';
import {Jackpot} from '../../model/jackpot';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lisetsuppjackpot',
  templateUrl: './lisetsuppjackpot.component.html',
  styleUrls: ['./lisetsuppjackpot.component.css']
})
export class LisetsuppjackpotComponent implements OnInit {

  constructor(private jackpotService: JackpotService,  private routeur: Router) { }
  jackpots: Jackpot[] = [];
  Jack: Jackpot = new Jackpot();
  ngOnInit(): void {
    this.jackpots = [];
    this.jackpotsL();
  }
  private jackpotsL() {
    this.jackpotService.getJackpotList().subscribe(data => {
      console.log(data);
      this.jackpots = data; });
  }

  goToJackpotList() {
    this.routeur.navigate(['/JackpotList']);
  }
  remove(idJ: any) {
    this.jackpotService.remove(idJ).subscribe(data => {
      console.log(data);
      });
  }

}
