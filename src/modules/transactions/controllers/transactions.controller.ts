import { Body, Controller, Post } from '@nestjs/common';
import { TransactionsService } from '../services/transactions.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionService: TransactionsService) {}

  @Post('process')
  @ApiOperation({ summary: 'Process Transaction', description: 'Process a transaction.' })
  @ApiBody({ description: 'Data required to process the transaction.' })
  @ApiResponse({ status: 200, description: 'Transaction processed successfully.' })
  async processTransaction(@Body() data: any) {
    return await this.transactionService.processTransaction(data);
  }
}
