import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from '../services/payment.service';
import { PaymentDto } from '../dtos/payment.dto';

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

  @Post('process')
  async processPayment(@Body() paymentDto: PaymentDto) {
    return await this.paymentService.processPayment(paymentDto);
  }
}
