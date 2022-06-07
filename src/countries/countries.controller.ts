import { Controller, Get } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private CountriesService: CountriesService) {}

  @Get()
  async getAll() {
    return this.CountriesService.getAll();
  }
}
