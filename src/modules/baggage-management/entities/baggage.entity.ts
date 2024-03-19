import { ApiProperty } from '@nestjs/swagger';
import { Route } from 'src/modules/route-search/entities/route.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Baggage {

  @ApiProperty({ description: 'ID de la maleta' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Peso de la maleta' })
  @Column()
  weight: number;

  @ManyToOne(() => Route, route => route.baggages)
  route: Route;
}
