import {Module} from '@nestjs/common';
import {OrderController} from "./order.controller";
import {Order } from "./order.model";
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import {TypeOrmModule} from "@nestjs/typeorm";
import { NewOrderService } from './new-order/new-order.service';
import { MappingService } from './mapping/mapping.service';

@Module({
    imports: [
        RabbitMQModule.forRootAsync(RabbitMQModule, {
            useFactory: () => ({
                uri: `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}:5672`
            }),
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
