import { Repository } from 'typeorm';
import { NewCarInput } from './dto/newCar.input';
import { Car } from './entities/car';
import { CarPhoto } from './entities/carPhoto';
export declare class CarsService {
    private carRepository;
    private carPhotoRepository;
    constructor(carRepository: Repository<Car>, carPhotoRepository: Repository<CarPhoto>);
    getAllCars(): Promise<Car[]>;
    getCarById(carId: string): Promise<Car>;
    addCar(newCarData: NewCarInput): Promise<Car>;
    deleteCar(carId: string): Promise<string>;
}
