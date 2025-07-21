import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from 'src/interfaces/car.interface';
import {v4 as uuid} from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

        private cars: Car [] = [
            // {
            // id: uuid(),
            // brand: 'Toyota',
            // model: 'Corolla',
            // },
            // {
            // id: uuid(),
            // brand: 'Honda',
            // model: 'Civic',
            // },
            // {
            // id: uuid(),
            // brand: 'Jeep',
            // model: 'Cherokee',
            // },
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {

        const car = this.cars.find(car => car.id === id);

        if (!car) throw new NotFoundException(`Carro con el id ${id} no fue encontrado`);

        return  car;
    }

    create(createCarDto: CreateCarDto): Car {
    const newCar: Car = {
        id: uuid(),
        ...createCarDto, 
    };

    this.cars.push(newCar);
    return newCar;
    }

    update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id); 

    if (updateCarDto.id && updateCarDto.id !== id) {
        throw new BadRequestException(`Car id is not valid inside body`)
    }

    carDB = {
        ...carDB,
        ...updateCarDto,
        id, 
    };

    this.cars = this.cars.map(car => (car.id === id ? carDB : car));

    return carDB;
    }

    delete(id: string) {
         this.findOneById(id); 

         this.cars = this.cars.filter(car => car.id !== id); 

        return {
        message: `Carro con id ${id} eliminado exitosamente`,
        }
}

    fillCarsWithSeedData( cars: Car[]) {
        this.cars = cars;
    }
}
