"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const car_1 = require("./entities/car");
const carPhoto_1 = require("./entities/carPhoto");
let CarsService = class CarsService {
    carRepository;
    carPhotoRepository;
    constructor(carRepository, carPhotoRepository) {
        this.carRepository = carRepository;
        this.carPhotoRepository = carPhotoRepository;
    }
    async getAllCars() {
        return await this.carRepository
            .find({
            relations: {
                thumbnail: true,
            },
        })
            .catch(() => {
            throw new common_1.InternalServerErrorException();
        });
    }
    async getCarById(carId) {
        return await this.carRepository
            .findOne({
            where: { id: carId },
            relations: {
                thumbnail: true,
            },
        })
            .catch(() => {
            throw new common_1.InternalServerErrorException();
        });
    }
    async addCar(newCarData) {
        const newCarPhoto = this.carPhotoRepository.create(newCarData.thumbnail);
        await this.carPhotoRepository.save(newCarPhoto).catch(() => {
            new common_1.InternalServerErrorException();
        });
        const newCar = this.carRepository.create(newCarData);
        newCar.thumbnail = newCarPhoto;
        await this.carRepository.save(newCar).catch(() => {
            new common_1.InternalServerErrorException();
        });
        return newCar;
    }
    async deleteCar(carId) {
        const car = await this.getCarById(carId);
        await this.carPhotoRepository.delete(car.thumbnail).catch(() => {
            new common_1.InternalServerErrorException();
        });
        await this.carRepository.delete(car).catch(() => {
            new common_1.InternalServerErrorException();
        });
        return `Car ${carId} deleted`;
    }
};
CarsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(car_1.Car)),
    __param(1, (0, typeorm_1.InjectRepository)(carPhoto_1.CarPhoto)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map