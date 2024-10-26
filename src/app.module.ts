import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { mongoConfig } from './configs/mongo';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ShopModule } from './shop/shop.module';
import { AdminModule } from './admin/admin.module';
import { ReviewModule } from './review/review.module';
import { OrdersModule } from './orders/orders.module';
import { CategoryModule } from './category/category.module';
import { ProductsModule } from './products/products.module';
import { AdminProductsModule } from './admin-products/admin-products.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: mongoConfig,
    }),
    ProductsModule,
    CategoryModule,
    AdminModule,
    AdminProductsModule,
    AuthModule,
    UserModule,
    OrdersModule,
    ShopModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
