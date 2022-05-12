import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { PublicityComponent } from './publicity/publicity.component';
import { MainComponent } from './main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { CharityComponent } from './charity/charity.component';
import { JackpotComponent } from './jackpot/jackpot.component';
import { EventsComponent } from './events/events.component';
import { EventsAddSuppComponent } from './events/events-add-supp/events-add-supp.component';
import { LisetsuppjackpotComponent } from './jackpot/lisetsuppjackpot/lisetsuppjackpot.component';
import { DonationuserComponent } from './donationuser/donationuser.component';
import { ReservationComponent } from './reservation/reservation.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    PublicityComponent,
    MainComponent,
    CharityComponent,
    JackpotComponent,
    EventsComponent,
    EventsAddSuppComponent,
    LisetsuppjackpotComponent,
    DonationuserComponent,
    ReservationComponent,


  ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HomeModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  exports: [
    CharityComponent,
    JackpotComponent,
    EventsComponent,
    EventsAddSuppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
