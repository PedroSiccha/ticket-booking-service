import { Module } from '@nestjs/common';
import { BaggageManagementController } from './controllers/baggage-management.controller';
import { BaggageManagementService } from './services/baggage-management.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Baggage } from './entities/baggage.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Baggage]),
  ],
  controllers: [BaggageManagementController],
  providers: [BaggageManagementService]
})
export class BaggageManagementModule {}
