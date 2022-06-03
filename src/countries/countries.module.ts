import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';

@Module({
  controllers: [CountriesController],
  providers: [CountriesService],
  imports: [HttpModule],
})
export class CountriesModule {}
