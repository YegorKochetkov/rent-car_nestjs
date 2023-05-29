import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsResolver } from './cars.resolver';
import { CarsService } from './cars.service';
import { Car } from './entities/car';
import { CarPhoto } from './entities/carPhoto';

@Module({
  imports: [TypeOrmModule.forFeature([Car, CarPhoto])],
  providers: [CarsService, CarsResolver],
  exports: [CarsService],
})
export class CarsModule {}
