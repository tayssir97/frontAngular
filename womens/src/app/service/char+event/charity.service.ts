import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Charity} from '../../model/charity/charity';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CharityService {
  baseUrl = environment.webservice.baseUrl;
  private headers: HttpHeaders = new HttpHeaders();

   private URL = 'http://localhost:8080/charityList';
  constructor(private httpClient: HttpClient ) { }
  getcharity(): Observable<Charity[]> {
    return  this.httpClient.get<Charity[]>(`${this.URL}`);
  }

}
