import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OrderModule } from './order/order.module';
import {AppService} from "./app.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Order} from "./order/order.model";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'db',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'micro_mapping',
          entities: [Order],
      }),
      OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
