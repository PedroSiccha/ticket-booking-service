/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouteSearchModule } from './modules/route-search/route-search.module';
import { SeatReservationModule } from './modules/seat-reservation/seat-reservation.module';
import { BaggageManagementModule } from './modules/baggage-management/baggage-management.module';
import { PaymentModule } from './modules/payment/payment.module';
import { TicketIssuanceModule } from './modules/ticket-issuance/ticket-issuance.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { CqrsModule } from '@nestjs/cqrs';
import { TransactionStartedHandler } from './modules/transactions/handlers/transaction-started.handler';
import { TransactionCompletedHandler } from './modules/transactions/handlers/transaction-completed.handler';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'ticketbooking',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    RouteSearchModule,
    SeatReservationModule,
    BaggageManagementModule,
    PaymentModule,
    TicketIssuanceModule,
    TransactionsModule,
    CqrsModule
  ],
  controllers: [AppController],
  providers: [AppService, TransactionStartedHandler, TransactionCompletedHandler],
})
export class AppModule {}
