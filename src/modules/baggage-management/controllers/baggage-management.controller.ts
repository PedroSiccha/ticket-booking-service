import { Body, Controller, Post } from '@nestjs/common';
import { BaggageManagementService } from '../services/baggage-management.service';
import { BaggageDto } from '../dtos/baggage.dto';

@Controller('baggage-management')
export class BaggageManagementController {
    constructor(private readonly baggageService: BaggageManagementService) {}

  @Post('add')
  async addBaggage(@Body() baggageDto: BaggageDto) {
    const { routeId, weight } = baggageDto;
    return await this.baggageService.addBaggage(routeId, weight);
  }
}
