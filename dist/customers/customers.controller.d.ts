import { CustomersService } from './customers.service';
import { Observable } from 'rxjs';
import { Customer } from 'src/interfaces/customer.interface';
export declare class CustomersController {
    private custService;
    constructor(custService: CustomersService);
    index(): Observable<Customer[]>;
    getCustomer(id: string): Observable<any>;
    createCustomer(customer: any): Observable<string>;
}
