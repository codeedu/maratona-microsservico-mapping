import {Module} from '@nestjs/common';
import {OrderController} from "./order.controller";
import {Order } from "./order.model";
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import {TypeOrmModule} from "@nestjs/typeorm";
import { NewOrderService } from './new-order/new-order.service';
import { MappingService } from './mapping/mapping.service';

@Module({
    imports: [
        RabbitMQModule.forRoot(RabbitMQModule, {
            uri: 'amqp://admin:admin@rabbitmq:5672',
        }),
        TypeOrmModule.forFeature([Order])
    ],
    controllers: [OrderController],
    providers: [
        NewOrderService,
        MappingService
    ]
})
export class OrderModule {
}
