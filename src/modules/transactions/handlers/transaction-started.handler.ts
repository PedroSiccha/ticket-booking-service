import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { TransactionStartedEvent } from '../events/transaction-started.event';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
@EventsHandler(TransactionStartedEvent)
export class TransactionStartedHandler implements IEventHandler<TransactionStartedEvent> {
  private readonly logger = new Logger(TransactionStartedHandler.name);

  handle(event: TransactionStartedEvent) {
    const { data } = event;
    this.logger.log(`Se ha iniciado una transacción para el siguiente dato: ${JSON.stringify(data)}`);
  }
}