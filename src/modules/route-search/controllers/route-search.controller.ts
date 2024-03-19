import { Controller, Get, Query } from '@nestjs/common';
import { RouteSearchService } from '../services/route-search.service';

@Controller('route-search')
export class RouteSearchController {
  constructor(private readonly routeSearchService: RouteSearchService) {}

  @Get()
  async searchRoutes(@Query() query: any) {
    const { origin, destination, departureDate } = query;
    return await this.routeSearchService.searchRoutes(origin, destination, departureDate);
  }
}
