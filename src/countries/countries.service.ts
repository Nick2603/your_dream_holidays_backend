import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICountry } from '../models/ICountry';

@Injectable()
export class CountriesService {
  constructor(private httpService: HttpService) {}

  getAll(): Observable<AxiosResponse> {
    const response = this.httpService
      .get('https://restcountries.com/v2/all')
      .pipe(map(res => res.data.map((country: ICountry) => country.name)));

    const result = response;

    return result;
  }
}
