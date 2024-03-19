import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Payment {
  @ApiProperty({ description: 'ID del pago' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Cantidad del pago' })
  @Column()
  amount: number;

  @ApiProperty({ description: 'Moneda del pago' })
  @Column()
  currency: string;
}
