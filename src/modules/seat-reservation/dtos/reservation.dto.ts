import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';


export class ReservationDto {
  
  @ApiProperty({ description: 'ID de la ruta', example: 1 })
  @IsNumber({}, { message: 'El ID de ruta debe ser un número' })
  routeId: number;

  @ApiProperty({ description: 'Número del asiento', example: 'A1' })
  @IsString({ message: 'El número de asiento debe ser una cadena.' })
  seatNumber: string;
}