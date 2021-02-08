import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
