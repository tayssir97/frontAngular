import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    constructor(public location: Location, private router: Router) {
    }

    ngOnInit() {
      /*
        this.router.events.subscribe((event) => {
        this.isCollapsed = true;
        if (event instanceof NavigationStart) {
           if (event.url !== this.lastPoppedUrl) {
               this.yScrollStack.push(window.scrollY);
           }
       } else if (event instanceof NavigationEnd) {
            // tslint:disable-next-line:triple-equals
           if (event.url == this.lastPoppedUrl) {
               this.lastPoppedUrl = undefined;
               window.scrollTo(0, this.yScrollStack.pop());
           } else {
               window.scrollTo(0, 0);
           }
       }
     });
     this.location.subscribe((ev: PopStateEvent) => {
         this.lastPoppedUrl = ev.url;
     });
    }
    events() {
        this.router.navigate(['events']);
    }
    charity() {
        this.router.navigate(['charity']);
    }
    jackpot() {
        this.router.navigate(['jackpot']);
    }
    addevent() {
        this.router.navigate(['addevents']);
    }
    isHome() {
        const titlee = this.location.prepareExternalUrl(this.location.path());

        if ( titlee === 'main/home' ) {
            return true;
        } else {
            return false;
        }
    }
    isDocumentation() {
        const titlee = this.location.prepareExternalUrl(this.location.path());
        if ( titlee === 'main/documentation' ) {
            return true;
        } else {
            return false;
        }*/
    }
}
