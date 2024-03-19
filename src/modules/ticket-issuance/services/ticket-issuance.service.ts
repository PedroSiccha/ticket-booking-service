import { Injectable } from '@nestjs/common';
import { TicketDto } from '../dtos/ticket.dto';

@Injectable()
export class TicketIssuanceService {
    constructor() {}

  async issueTicket(ticketDto: TicketDto): Promise<string> {
    const { passengerName, routeId, seatNumber, baggageId } = ticketDto;
    return `Ticket issued successfully for ${passengerName} on route ${routeId} with seat ${seatNumber}.`;
  }
}
