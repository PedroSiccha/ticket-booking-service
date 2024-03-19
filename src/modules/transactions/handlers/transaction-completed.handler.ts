import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { TransactionCompletedEvent } from '../events/transaction-completed.event';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
@EventsHandler(TransactionCompletedEvent)
export class TransactionCompletedHandler implements IEventHandler<TransactionCompletedEvent> {
  private readonly logger = new Logger(TransactionCompletedHandler.name);

  handle(event: TransactionCompletedEvent) {
    const { data } = event;
    this.logger.log(`Se ha completado una transacción para el siguiente dato: ${JSON.stringify(data)}`);
  }
}