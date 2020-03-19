import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OrderModule } from './order/order.module';
import {AppService} from "./app.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Order} from "./order/order.model";
import {ConfigModule} from "@nestjs/config";
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath: '.env'
      }),
      ServeStaticModule.forRoot({
          rootPath: join(__dirname, '..', 'client'),
      }),
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: process.env.MYSQL_HOST,
          port: 3306,
          username: process.env.MYSQL_USER,
          password: process.env.MYSQL_PASSWORD,
          database: 'micro_mapping',
          entities: [Order],
      }),
      OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
