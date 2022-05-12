import { Component, OnInit } from '@angular/core';
import {DonationuserService} from '../service/char+event/donationuser.service';
import {Router} from '@angular/router';
import {Jackpot} from '../model/jackpot';
import {Donationuser} from '../model/donationuser';

@Component({
  selector: 'app-donationuser',
  templateUrl: './donationuser.component.html',
  styleUrls: ['./donationuser.component.css']
})
export class DonationuserComponent implements OnInit {
 donation: Donationuser[] = [];
  Jack: Jackpot = new Jackpot();
  constructor(private donationservice: DonationuserService, private routeur: Router) { }

  ngOnInit(): void {
    this.donation = [];
    this.donationlist();
  }
  private donationlist() {
    this.donationservice.getdonationList().subscribe(data => {
      console.log(data);
      this.donation = data; });
  }

}
