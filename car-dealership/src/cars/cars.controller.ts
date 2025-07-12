import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { NotFoundError } from 'rxjs';

@Controller('cars')
export class CarsController {

    private cars = ['Toyota', 'GM', 'Jeep'];

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById( @Param('id') id: number ) {
    console.log({id});

    if (id < 0 || id >= this.cars.length) {
      throw new NotFoundException('Carro no encontrado');
    }

    return this.cars[id];

  }
}
