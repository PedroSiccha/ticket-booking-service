import { Body, Controller, Post } from '@nestjs/common';
import { BaggageManagementService } from '../services/baggage-management.service';
import { BaggageDto } from '../dtos/baggage.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Baggage } from '../entities/baggage.entity';

@ApiTags('Gestión de equipaje')
@Controller('baggage-management')
export class BaggageManagementController {
    constructor(private readonly baggageService: BaggageManagementService) {}

  @Post('add')
  @ApiOperation({ summary: 'Agregar equipaje', description: 'Agregue equipaje para una ruta específica.' })
  @ApiBody({ type: BaggageDto, description: 'Datos requeridos para agregar equipaje.' })
  @ApiResponse({ status: 201, description: 'El equipaje se ha agregado correctamente.', type: Baggage })
  async addBaggage(@Body() baggageDto: BaggageDto) {
    const { routeId, weight } = baggageDto;
    return await this.baggageService.addBaggage(routeId, weight);
  }
}
