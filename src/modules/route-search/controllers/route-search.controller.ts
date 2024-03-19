import { Controller, Get, Query } from '@nestjs/common';
import { RouteSearchService } from '../services/route-search.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Route } from '../entities/route.entity';

@ApiTags('Búsqueda de ruta')
@Controller('route-search')
export class RouteSearchController {
  constructor(private readonly routeSearchService: RouteSearchService) {}

  @Get()
  @ApiOperation({ summary: 'Buscar Rutas', description: 'Busque rutas según origen, destino y fecha de salida.' })
  @ApiResponse({ status: 200, description: 'Rutas encontradas con éxito.', type: [Route] })
  async searchRoutes(@Query() query: any) {
    const { origin, destination, departureDate } = query;
    return await this.routeSearchService.searchRoutes(origin, destination, departureDate);
  }
}
