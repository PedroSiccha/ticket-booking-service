import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from '../services/payment.service';
import { PaymentDto } from '../dtos/payment.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Pago')
@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

  @Post('process')
  @ApiOperation({ summary: 'Procesar pago', description: 'Procesar un pago para una reserva.' })
  @ApiBody({ type: PaymentDto, description: 'Datos requeridos para procesar el pago.' })
  @ApiResponse({ status: 200, description: 'Pago procesado exitosamente.' })
  async processPayment(@Body() paymentDto: PaymentDto) {
    return await this.paymentService.processPayment(paymentDto);
  }
}
