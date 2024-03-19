import { ApiProperty } from '@nestjs/swagger';
import { Route } from 'src/modules/route-search/entities/route.entity';
import { Ticket } from 'src/modules/ticket-issuance/entities/ticket.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class SeatReservation {

  @ApiProperty({ description: 'ID de la reserva de asiento' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Número de asiento reservado' })
  @Column()
  seatNumber: string;

  @ManyToOne(() => Route, route => route.reservations)
  route: Route;

  @ApiProperty({ description: 'Boleto asociado a la reserva de asiento' })
  @ManyToOne(() => Ticket, ticket => ticket.reservation)
  ticket: Ticket;

}
