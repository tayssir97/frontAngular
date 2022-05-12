import { Component, OnInit } from '@angular/core';
import {Charity} from '../model/charity/charity';
import {CharityService} from '../service/char+event/charity.service';
import {Router} from '@angular/router';
import {Jackpot} from '../model/jackpot';
import * as Highcharts from 'highcharts';
declare var require: any;

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css']
})
export class CharityComponent implements OnInit {
  public options: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: {
      text: 'Evolution of womens'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['2016', '2017' , '2018', '2019', '2020', '2021', '2022'],
      tickmarkPlacement: 'on',
      title: {
        enabled: false
      }
    },
    series: [{
      name: ' diplomed_with_project',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'diplomed',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'In_progress',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }]};

  jackpot = new Jackpot();
  CharityList: Charity[];
  constructor(private charityService: CharityService, private router: Router) { }

  ngOnInit(): void {
    /** this.CharityList = [{idC: 1, objective: 'women projects' },{idC: 2, objective: 'handcrafts'}]; */
    this.getCharitys();
    Highcharts.chart('container', this.options);
  }
private getCharitys() {
    this.charityService.getcharity().subscribe(data => {this.CharityList = data; });
}

  changementDePage = function () {
    this.router.navigateByUrl(['../main/jackpot']);
  };

}
