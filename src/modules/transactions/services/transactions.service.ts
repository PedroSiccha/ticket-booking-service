import { Injectable, Logger } from '@nestjs/common';
import { TransactionStartedEvent } from '../events/transaction-started.event';
import { TransactionCompletedEvent } from '../events/transaction-completed.event';
import { EventBus } from '@nestjs/cqrs';

@Injectable()
export class TransactionsService {
  private readonly logger = new Logger(TransactionsService.name);

  constructor(private readonly eventBus: EventBus) {}

  async processTransaction(data: any): Promise<void> {
    try {
      this.eventBus.publish(new TransactionStartedEvent(data));

      this.logger.log('Procesando la transacción...');

      const seatsReserved = this.reserveSeats(data.eventId, data.numSeats);

      if (seatsReserved) {
        this.logger.log('Asientos reservados exitosamente.');
        this.eventBus.publish(new TransactionCompletedEvent(data));
      } else {
        this.logger.error('No se pudieron reservar los asientos. Cancelando la transacción.');
      }
    } catch (error) {
      this.logger.error(`Error al procesar la transacción: ${error.message}`);
    }
  }

  private reserveSeats(eventId: string, numSeats: number): boolean {
    return true;
  }
}
