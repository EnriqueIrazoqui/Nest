import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { AppController } from './app.controller';
import { CarsNoSpecService } from './cars--no-spec/cars--no-spec.service';

@Module({
  imports: [CarsModule],
  controllers: [AppController],
  providers: [CarsNoSpecService],
  exports: [],
})
export class AppModule {}
