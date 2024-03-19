import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class BaggageDto {
  
  @ApiProperty({ description: 'ID de la ruta', example: 1 })
  @IsNumber({}, { message: 'El ID de ruta debe ser un número' })
  routeId: number;

  @ApiProperty({ description: 'Peso del equipaje', example: 20 })
  @IsNumber({}, { message: 'El peso debe ser un número.' })
  weight: number;
}