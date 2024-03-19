import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsCreditCard, IsNotEmpty } from 'class-validator';

export class PaymentDto {
  
  @ApiProperty({ description: 'El monto a pagar', example: 100 })
  @IsNumber({}, { message: 'La cantidad debe ser un número.' })
  amount: number;

  @ApiProperty({ description: 'Moneda del pago', example: 'S/.' })
  @IsString({ message: 'La moneda debe ser una cadena.' })
  @IsNotEmpty({ message: 'La moneda no puede estar vacía' })
  currency: string;

  @ApiProperty({ description: 'Número de Tarjeta de Crédito', example: '4111111111111111' })
  @IsCreditCard({ message: 'Número de tarjeta de crédito no válido' })
  cardNumber: string;

  @ApiProperty({ description: 'Nombre del titular de la tarjeta', example: 'Pedro Siccha' })
  @IsString({ message: 'El nombre del titular de la tarjeta debe ser una cadena.' })
  @IsNotEmpty({ message: 'El nombre del titular de la tarjeta no puede estar vacío' })
  cardholderName: string;

  @ApiProperty({ description: 'Fecha de caducidad de la tarjeta de crédito (MM/AAAA)', example: '12/2025' })
  @IsString({ message: 'La fecha de vencimiento debe ser una cadena.' })
  @IsNotEmpty({ message: 'La fecha de vencimiento no puede estar vacía' })
  expiryDate: string;

  @ApiProperty({ description: 'CVV (Código de verificación de la tarjeta)', example: '123' })
  @IsString({ message: 'CVV debe ser una cadena' })
  @IsNotEmpty({ message: 'CVV no puede estar vacío' })
  cvv: string;
}