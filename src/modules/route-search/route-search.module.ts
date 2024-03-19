import { Module } from '@nestjs/common';
import { RouteSearchController } from './controllers/route-search.controller';
import { RouteSearchService } from './services/route-search.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Route } from './entities/route.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Route]),
  ],
  controllers: [RouteSearchController],
  providers: [RouteSearchService]
})
export class RouteSearchModule {}
