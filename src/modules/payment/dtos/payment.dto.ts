import { IsNumber, IsString, IsCreditCard, IsNotEmpty } from 'class-validator';

export class PaymentDto {
  @IsNumber()
  amount: number;

  @IsString()
  @IsNotEmpty()
  currency: string;

  @IsCreditCard()
  cardNumber: string;

  @IsString()
  @IsNotEmpty()
  cardholderName: string;

  @IsString()
  @IsNotEmpty()
  expiryDate: string;

  @IsString()
  @IsNotEmpty()
  cvv: string;
}