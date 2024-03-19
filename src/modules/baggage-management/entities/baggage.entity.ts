import { Route } from 'src/modules/route-search/entities/route.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Baggage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  weight: number;

  @ManyToOne(() => Route, route => route.baggages)
  route: Route;
}
