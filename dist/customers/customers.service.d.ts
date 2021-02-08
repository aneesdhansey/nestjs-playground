import { Observable } from 'rxjs';
import { Customer } from 'src/interfaces/customer.interface';
export declare class CustomersService {
    private _customers;
    getAllCustomers(): Observable<Customer[]>;
    getCustomerById(id: number): Observable<Customer>;
    createCustomer(customer: Customer): Observable<string>;
}
