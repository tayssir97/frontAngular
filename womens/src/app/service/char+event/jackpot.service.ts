import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Jackpot} from '../../model/jackpot';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JackpotService {
  /*private URL = 'http://localhost:8080/JackpotList';*/
  baseUrl = environment.webservice.baseUrl;
  private headers: HttpHeaders = new HttpHeaders();
  constructor(private httpclient: HttpClient) { }
  getJackpotList(): Observable<any> {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + JSON.parse(<string>localStorage.getItem('token'))});
    return this.httpclient.get(this.baseUrl + 'JackpotList', {
      headers: this.headers
    });
  }
  creatJackpot(jackpot: Jackpot) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + JSON.parse(<string>localStorage.getItem('token'))});
    return this.httpclient.post(this.baseUrl + 'jackpot', jackpot, {
      headers: this.headers });
  }

  remove(idJ: number) {
    this.headers = new HttpHeaders({Authorization: 'Bearer ' + JSON.parse(<string>localStorage.getItem('token'))});
    return this.httpclient.delete(this.baseUrl + 'deletJackpot/' + idJ, {
      headers: this.headers
    });
  }
}
