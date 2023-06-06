import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { NewCarInput } from './dto/newCar.input';
import { Car } from './entities/car';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query(() => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carsService.getAllCars().catch((error) => {
      throw new Error(`Cars couldn't be fetched: ${error}`);
    });
  }

  @Query(() => Car)
  public async carById(@Args('carId') carId: string): Promise<Car> {
    return await this.carsService.getCarById(carId).catch((error) => {
      throw new Error(`Car not found: ${error}`);
    });
  }

  @Mutation(() => Car)
  public async addNewCar(
    @Args('newCarData') newCarData: NewCarInput,
  ): Promise<Car> {
    return await this.carsService.addCar(newCarData).catch((error) => {
      throw new Error(`Car couldn't be added: ${error}`);
    });
  }

  @Mutation(() => String)
  public async deleteCar(@Args('carId') carId: string): Promise<string> {
    return await this.carsService.deleteCar(carId).catch((error) => {
      throw new Error(`Car couldn't be deleted: ${error}`);
    });
  }
}
