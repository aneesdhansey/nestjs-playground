import { CustomersService } from './customers.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Customer } from 'src/interfaces/customer.interface';

@Controller('customers')
export class CustomersController {
  constructor(private custService: CustomersService) {}

  @Get()
  index() {
    return this.custService.getAllCustomers();
  }

  @Get(':id')
  getCustomer(@Param('id') id: string): Observable<any> {
    return this.custService.getCustomerById(+id);
  }

  @Post()
  createCustomer(@Body() customer) {
    const id = new Date().getTime();
    const newCustomer: Customer = { id, name: customer.name, isActive: true };
    return this.custService.createCustomer(newCustomer);
  }
}
