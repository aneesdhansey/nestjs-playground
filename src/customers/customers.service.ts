import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Customer } from 'src/interfaces/customer.interface';

@Injectable()
export class CustomersService {
  private _customers: Customer[] = [
    { id: 1, name: 'Customer 1', isActive: false },
    { id: 2, name: 'Customer 2', isActive: true },
  ];

  getAllCustomers(): Observable<Customer[]> {
    return of(this._customers);
  }

  getCustomerById(id: number): Observable<Customer> {
    const customer = this._customers.find((cust) => cust.id === id);

    if (!id) throw new BadRequestException('id is required');

    if (!customer) throw new NotFoundException();

    return of(customer);
  }

  createCustomer(customer: Customer): Observable<string> {
    if (!customer) throw new BadRequestException('Customer obj is required');

    this._customers.push(customer);

    return of('Customer created successfully!');
  }
}
