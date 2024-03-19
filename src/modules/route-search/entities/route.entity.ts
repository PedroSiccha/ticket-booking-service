import { Baggage } from 'src/modules/baggage-management/entities/baggage.entity';
import { SeatReservation } from 'src/modules/seat-reservation/entities/seat-reservation.entity';
import { Ticket } from 'src/modules/ticket-issuance/entities/ticket.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Route {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  origin: string;

  @Column()
  destination: string;

  @Column()
  departureDate: Date;

  @Column()
  arrivalDate: Date;

  @OneToMany(() => Baggage, baggage => baggage.route)
  baggages: Baggage[];

  @OneToMany(() => SeatReservation, seatReservation => seatReservation.route)
  reservations: SeatReservation[];

  @OneToMany(() => Ticket, ticket => ticket.route)
  tickets: Ticket[];
}
