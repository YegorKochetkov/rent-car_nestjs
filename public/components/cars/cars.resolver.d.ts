import { CarsService } from './cars.service';
import { NewCarInput } from './dto/newCar.input';
import { Car } from './entities/car';
export declare class CarsResolver {
    private carsService;
    constructor(carsService: CarsService);
    cars(): Promise<Car[]>;
    carById(carId: string): Promise<Car>;
    addNewCar(newCarData: NewCarInput): Promise<Car>;
    deleteCar(carId: string): Promise<string>;
}
