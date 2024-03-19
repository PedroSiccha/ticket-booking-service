import { ApiProperty } from '@nestjs/swagger';
import { Baggage } from 'src/modules/baggage-management/entities/baggage.entity';
import { SeatReservation } from 'src/modules/seat-reservation/entities/seat-reservation.entity';
import { Ticket } from 'src/modules/ticket-issuance/entities/ticket.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Route {

  @ApiProperty({ description: 'ID de la ruta' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Origen de la ruta' })
  @Column()
  origin: string;

  @ApiProperty({ description: 'Destino de la ruta' })
  @Column()
  destination: string;

  @ApiProperty({ description: 'Fecha de salida de la ruta' })
  @Column()
  departureDate: Date;

  @ApiProperty({ description: 'Fecha de llegada de la ruta' })
  @Column()
  arrivalDate: Date;

  @ApiProperty({ description: 'Maletas asociadas a la ruta' })
  @OneToMany(() => Baggage, baggage => baggage.route)
  baggages: Baggage[];

  @ApiProperty({ description: 'Reservas de asientos asociadas a la ruta' })
  @OneToMany(() => SeatReservation, seatReservation => seatReservation.route)
  reservations: SeatReservation[];

  @ApiProperty({ description: 'Boletos asociados a la ruta' })
  @OneToMany(() => Ticket, ticket => ticket.route)
  tickets: Ticket[];
}
