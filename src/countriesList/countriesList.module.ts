import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CountriesListController } from './countriesList.controller';
import { CountriesListService } from './countriesList.service';

@Module({
  controllers: [CountriesListController],
  providers: [CountriesListService],
  imports: [HttpModule],
})
export class CountriesListModule {}
