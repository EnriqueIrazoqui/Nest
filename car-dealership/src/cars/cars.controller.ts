import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
// @UsePipes( ValidationPipe)
export class CarsController {
  constructor(   
     private readonly carsService: CarsService)
     {}


  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById( @Param('id', new ParseUUIDPipe ({ version: '4'})) id: string ) {
    console.log({id});


    // throw new Error('test');

    // if (id < 0 || id >= this.carsService.findOneById(id)) {
    //   throw new NotFoundException('Carro no encontrado');
    // }

    return this.carsService.findOneById(id);

  }

  @Post()
  createCar( @Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  updateCar( 
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto)
  {
    return this.carsService.update(id, updateCarDto);
  }


  @Delete(':id')
  deleteCar( @Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }


}
