import { Body, Controller, Post } from '@nestjs/common';
import { TicketIssuanceService } from '../services/ticket-issuance.service';
import { TicketDto } from '../dtos/ticket.dto';

@Controller('ticket-issuance')
export class TicketIssuanceController {
    constructor(private readonly ticketIssuanceService: TicketIssuanceService) {}

  @Post('issue')
  async issueTicket(@Body() ticketDto: TicketDto) {
    return await this.ticketIssuanceService.issueTicket(ticketDto);
  }
}
