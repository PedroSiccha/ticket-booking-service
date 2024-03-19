import { Body, Controller, Post } from '@nestjs/common';
import { SeatReservationService } from '../services/seat-reservation.service';
import { ReservationDto } from '../dtos/reservation.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SeatReservation } from '../entities/seat-reservation.entity';

@ApiTags('Reservacion de asiento')
@Controller('seat-reservation')
export class SeatReservationController {
    constructor(private readonly seatReservationService: SeatReservationService) {}

  @Post('reserve')
  @ApiOperation({ summary: 'Reservar asiento', description: 'Reserva un asiento para una ruta específica.' })
  @ApiBody({ type: ReservationDto, description: 'Datos necesarios para reservar un asiento.' })
  @ApiResponse({ status: 201, description: 'Asiento reservado con éxito.', type: SeatReservation })
  async reserveSeat(@Body() reservationDto: ReservationDto) {
    const { routeId, seatNumber } = reservationDto;
    return await this.seatReservationService.reserveSeat(routeId, seatNumber);
  }
}
