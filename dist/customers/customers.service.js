"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const customer_interface_1 = require("../interfaces/customer.interface");
let CustomersService = class CustomersService {
    constructor() {
        this._customers = [
            { id: 1, name: 'Customer 1', isActive: false },
            { id: 2, name: 'Customer 2', isActive: true },
        ];
    }
    getAllCustomers() {
        return rxjs_1.of(this._customers);
    }
    getCustomerById(id) {
        const customer = this._customers.find((cust) => cust.id === id);
        if (!id)
            throw new common_1.BadRequestException('id is required');
        if (!customer)
            throw new common_1.NotFoundException();
        return rxjs_1.of(customer);
    }
    createCustomer(customer) {
        if (!customer)
            throw new common_1.BadRequestException('Customer obj is required');
        this._customers.push(customer);
        return rxjs_1.of('Customer created successfully!');
    }
};
CustomersService = __decorate([
    common_1.Injectable()
], CustomersService);
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map