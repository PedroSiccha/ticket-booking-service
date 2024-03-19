import { IsNumber } from 'class-validator';

export class BaggageDto {
  @IsNumber()
  routeId: number;

  @IsNumber()
  weight: number;
}