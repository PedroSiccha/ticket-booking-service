import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Route } from '../entities/route.entity';

@Injectable()
export class RouteSearchService {
  constructor(
    @InjectRepository(Route)
    private readonly routeRepository: Repository<Route>,
  ) {}

  async searchRoutes(origin: string, destination: string, departureDate: Date): Promise<Route[]> {
    return await this.routeRepository.find({
      where: {
        origin,
        destination,
        departureDate,
      },
    });
  }
}
