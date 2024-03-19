import { Module } from '@nestjs/common';
import { TransactionsController } from './controllers/transactions.controller';
import { TransactionsService } from './services/transactions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandBus, EventBus, UnhandledExceptionBus } from '@nestjs/cqrs';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, EventBus, CommandBus, UnhandledExceptionBus]
})
export class TransactionsModule {}
