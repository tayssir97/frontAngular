import {Component, Inject, OnInit} from '@angular/core';
import {Jackpot} from '../model/jackpot';
import {JackpotService} from '../service/char+event/jackpot.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-jackpot',
  templateUrl: './jackpot.component.html',
  styleUrls: ['./jackpot.component.css']
})
export class JackpotComponent implements OnInit {
  constructor(private jackpotService: JackpotService, private routeur: Router
  ) { }
  jackpots: Jackpot[] = [];
  Jack: Jackpot = new Jackpot();
    saveJackpot() {
      this.jackpotService.creatJackpot(this.Jack).subscribe(data => {console.log(data);
        this.goToJackpotList(); }); }
  ngOnInit(): void {
      this.jackpots = [];
  }

goToJackpotList() {
  /*  this.routeur.navigate(['/JackpotList']); */
  }
  onSubmit() {
    this.saveJackpot();
  }

}
