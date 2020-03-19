import {Controller, Get, Param} from '@nestjs/common';
import {Order} from "./order.model";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Controller('orders')
export class OrderController {

    constructor(
        @InjectRepository(Order)
        private readonly orderRepo: Repository<Order>
    ) {

    }

    @Get(':id') //orders/123
    async show(@Param('id') id) {
        return await this.orderRepo.findOne(id);
    }
}
