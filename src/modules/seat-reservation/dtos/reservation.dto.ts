import { IsNumber, IsString } from 'class-validator';


export class ReservationDto {
  @IsNumber()
  routeId: number;

  @IsString()
  seatNumber: string;
}