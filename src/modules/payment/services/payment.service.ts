import { Injectable } from '@nestjs/common';
import { PaymentDto } from '../dtos/payment.dto';

@Injectable()
export class PaymentService {
    constructor() {}

  async processPayment(paymentDto: PaymentDto): Promise<string> {
    const { amount, currency, cardNumber, cardholderName, expiryDate, cvv } = paymentDto;
    return `Payment of ${amount} ${currency} processed successfully for card ending in ${cardNumber.slice(-4)}.`;
  }
}
