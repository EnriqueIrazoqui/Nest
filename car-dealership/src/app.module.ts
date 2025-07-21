import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { AppController } from './app.controller';
import { CarsNoSpecService } from './cars--no-spec/cars--no-spec.service';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [AppController],
  providers: [CarsNoSpecService],
  exports: [],
})
export class AppModule {}
