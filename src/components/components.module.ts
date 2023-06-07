import { Module } from '@nestjs/common';
import { Cars } from 'src/helpers/cars';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';

@Module({
  imports: [CarsModule],
})
export class ComponentsModule {
  constructor(private carsService: CarsService) {
    for (const car of Cars) {
      this.carsService.addCar(car);
    }
  }
}
