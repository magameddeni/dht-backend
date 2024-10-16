import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { mongoConfig } from './configs/mongo';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { AdminModule } from './admin/admin.module';
import { AdminProductsModule } from './admin-products/admin-products.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
