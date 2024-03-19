import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class TicketDto {
  
  @ApiProperty({ description: 'Nombre del pasajero', example: 'Pedro Siccha' })
  @IsString({ message: 'El nombre del pasajero debe ser una cadena.' })
  passengerName: string;

  @ApiProperty({ description: 'ID de la ruta', example: 1 })
  @IsNumber({}, { message: 'El ID de ruta debe ser un número' })
  routeId: number;

  @ApiProperty({ description: 'Número del asiento', example: 'A1' })
  @IsString({ message: 'El número de asiento debe ser una cadena.' })
  seatNumber: string;

  @ApiProperty({ description: 'ID del equipaje asociado al billete', example: 1 })
  @IsNumber({}, { message: 'La identificación del equipaje debe ser un número.' })
  baggageId: number;
}