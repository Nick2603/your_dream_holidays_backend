import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CountriesListService {
  constructor(private httpService: HttpService) {}

  GetAll(): Observable<AxiosResponse> {
    const response = this.httpService
      .get('https://restcountries.com/v2/all')
      .pipe(map(res => res.data.map((country: any) => country.name)));

    const result = response;

    return result;
  }
}
