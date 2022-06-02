import { Controller, Get } from '@nestjs/common';
import { CountriesListService } from './countriesList.service';

@Controller('countriesList')
export class CountriesListController {
  constructor(private CountriesListService: CountriesListService) {}

  @Get()
  async GetAll() {
    return this.CountriesListService.GetAll();
  }
}
