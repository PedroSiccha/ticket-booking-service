import { Body, Controller, Post } from '@nestjs/common';
import { SeatReservationService } from '../services/seat-reservation.service';
import { ReservationDto } from '../dtos/reservation.dto';

@Controller('seat-reservation')
export class SeatReservationController {
    constructor(private readonly seatReservationService: SeatReservationService) {}

  @Post('reserve')
  async reserveSeat(@Body() reservationDto: ReservationDto) {
    const { routeId, seatNumber } = reservationDto;
    return await this.seatReservationService.reserveSeat(routeId, seatNumber);
  }
}
