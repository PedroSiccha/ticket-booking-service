import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SeatReservation } from '../entities/seat-reservation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeatReservationService {
    constructor(
        @InjectRepository(SeatReservation)
        private readonly reservationRepository: Repository<SeatReservation>,
      ) {}
    
      async reserveSeat(routeId: number, seatNumber: string): Promise<SeatReservation> {
        const reservation = await this.reservationRepository.create({ ...{ route: { id: routeId } }, seatNumber });
        return await this.reservationRepository.save(reservation);
      }
}
