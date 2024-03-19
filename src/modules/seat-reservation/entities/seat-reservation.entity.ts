import { Route } from 'src/modules/route-search/entities/route.entity';
import { Ticket } from 'src/modules/ticket-issuance/entities/ticket.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class SeatReservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seatNumber: string;

  @ManyToOne(() => Route, route => route.reservations)
  route: Route;

  @ManyToOne(() => Ticket, ticket => ticket.reservation)
  ticket: Ticket;

}
