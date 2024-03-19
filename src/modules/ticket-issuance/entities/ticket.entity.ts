import { ApiProperty } from '@nestjs/swagger';
import { Route } from 'src/modules/route-search/entities/route.entity';
import { SeatReservation } from 'src/modules/seat-reservation/entities/seat-reservation.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Ticket {

  @ApiProperty({ description: 'ID del boleto' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Número del boleto' })
  @Column()
  ticketNumber: string;

  @ManyToOne(() => Route, route => route.tickets)
  route: Route;

  @ManyToOne(() => SeatReservation, reservation => reservation.ticket)
  reservation: SeatReservation;
}
