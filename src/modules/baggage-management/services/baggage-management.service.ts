import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Baggage } from '../entities/baggage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BaggageManagementService {
    constructor(
        @InjectRepository(Baggage)
        private readonly baggageRepository: Repository<Baggage>,
      ) {}
    
      async addBaggage(routeId: number, weight: number): Promise<Baggage> {
        const baggage = await this.baggageRepository.create({ ...{ route: { id: routeId } }, weight });
        return await this.baggageRepository.save(baggage);
      }
}
