import { IsString, IsNumber } from 'class-validator';

export class TicketDto {
  @IsString()
  passengerName: string;

  @IsNumber()
  routeId: number;

  @IsString()
  seatNumber: string;

  @IsNumber()
  baggageId: number;
}