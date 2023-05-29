import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewCarInput } from './dto/newCar.input';
import { Car } from './entities/car';
import { CarPhoto } from './entities/carPhoto';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car) private carRepository: Repository<Car>,
    @InjectRepository(CarPhoto)
    private carPhotoRepository: Repository<CarPhoto>,
  ) {}

  public async getAllCars(): Promise<Car[]> {
    return await this.carRepository
      .find({
        relations: {
          thumbnail: true,
        },
      })
      .catch(() => {
        throw new InternalServerErrorException();
      });
  }

  public async addCar(newCarData: NewCarInput): Promise<Car> {
    const newCarPhoto = this.carPhotoRepository.create(newCarData.thumbnail);

    await this.carPhotoRepository.save(newCarPhoto).catch(() => {
      new InternalServerErrorException();
    });

    const newCar = this.carRepository.create(newCarData);

    newCar.thumbnail = newCarPhoto;

    await this.carRepository.save(newCar).catch(() => {
      new InternalServerErrorException();
    });

    return newCar;
  }
}
