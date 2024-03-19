import { Body, Controller, Post } from '@nestjs/common';
import { TransactionsService } from '../services/transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionService: TransactionsService) {}

  @Post('process')
  async processTransaction(@Body() data: any) {
    return await this.transactionService.processTransaction(data);
  }
}
