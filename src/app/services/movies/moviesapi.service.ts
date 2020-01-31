import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MoviesapiService {

  baseUrl: string;
  API_KEY: string;
  language: string;
  region: string;

  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.API_KEY = '38bda87a12611ea31d36a12cc54c708e';
    this.language = 'en-US';
    this.region = 'US'
  }

  getPopular(page: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}movie/popular?api_key=${this.API_KEY}&page=${page}&language=${this.language}&region=${this.region}`)
  }


}
