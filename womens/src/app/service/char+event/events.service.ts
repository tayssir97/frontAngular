import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Events} from '../../model/events';
import {environment} from '../../../environments/environment';
import {DatePipe} from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private URL = 'http://localhost:8080/EventList';
  baseUrl = environment.webservice.baseUrl;
  private headers: HttpHeaders = new HttpHeaders();
  constructor(private httpclient: HttpClient) { }

  geteventList(): Observable<Events[]> {
    return this.httpclient.get<Events[]>(`${this.URL}`);
  }
  add(evn: Events, file: File ) {
    const datePipe = new DatePipe('en-US');
    const formdata = new FormData();
    formdata.append('nom', evn.nom);
    formdata.append('description', evn.description);
    formdata.append('dateDeb', datePipe.transform(evn.dateD, 'dd-MM-yyyy'));
    formdata.append('dateFin',  datePipe.transform(evn.dateF, 'dd-MM-yyyy'));
    formdata.append('location', evn.localisation);
    formdata.append('tarif', evn.tarif);
    formdata.append('nbPlace', evn.nbreDePlaces);
    formdata.append('upload', file);
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + JSON.parse(<string>localStorage.getItem('token'))});
    return this.httpclient.post(this.baseUrl + 'Events', formdata, {
      headers: this.headers
    });
  }
  remove(idE: number) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + JSON.parse(<string>localStorage.getItem('token'))});
    return this.httpclient.delete(this.baseUrl + 'deleteevent/' + idE, {
      headers: this.headers, responseType: 'text'
    });
  }

}
