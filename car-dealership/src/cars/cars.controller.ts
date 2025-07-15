import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(   
     private readonly carsService: CarsService)
     {}


  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById( @Param('id', ParseIntPipe) id: number ) {
    console.log({id});


    // throw new Error('test');

    // if (id < 0 || id >= this.carsService.findOneById(id)) {
    //   throw new NotFoundException('Carro no encontrado');
    // }

    return this.carsService.findOneById(Number(id));

  }

  @Post()
  createCar( @Body() body: any) {
    return body;
  }

  @Patch(':id')
  updateCar( @Body() body: any) {
    return body;
  }


  @Delete(':id')
  deleteCar( @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id
    };
  }


}
