import { Module } from '@nestjs/common';
import { TicketIssuanceController } from './controllers/ticket-issuance.controller';
import { TicketIssuanceService } from './services/ticket-issuance.service';

@Module({
  controllers: [TicketIssuanceController],
  providers: [TicketIssuanceService],
})
export class TicketIssuanceModule {}
