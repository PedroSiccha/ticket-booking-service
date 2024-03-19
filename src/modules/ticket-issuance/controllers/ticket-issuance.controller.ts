import { Body, Controller, Post } from '@nestjs/common';
import { TicketIssuanceService } from '../services/ticket-issuance.service';
import { TicketDto } from '../dtos/ticket.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Emisión de billetes')
@Controller('ticket-issuance')
export class TicketIssuanceController {
    constructor(private readonly ticketIssuanceService: TicketIssuanceService) {}

  @Post('issue')
  @ApiOperation({ summary: 'Emitir ticket', description: 'Emitir un billete para una reserva de asiento confirmada.' })
  @ApiBody({ type: TicketDto, description: 'Datos necesarios para emitir un billete.' })
  @ApiResponse({ status: 201, description: 'Boleto emitido exitosamente.' })
  async issueTicket(@Body() ticketDto: TicketDto) {
    return await this.ticketIssuanceService.issueTicket(ticketDto);
  }
}
