import { Module } from '@nestjs/common';
import { SeatReservationController } from './controllers/seat-reservation.controller';
import { SeatReservationService } from './services/seat-reservation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeatReservation } from './entities/seat-reservation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SeatReservation]),
  ],
  controllers: [SeatReservationController],
  providers: [SeatReservationService]
})
export class SeatReservationModule {}
