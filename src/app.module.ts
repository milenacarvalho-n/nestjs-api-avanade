import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { EmailModule } from './email/email.module';

// todo os modulos precisam estar referenciados no app.module.ts

@Module({
  imports: [AuthModule, UsersModule, ProductsModule, OrdersModule, EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
