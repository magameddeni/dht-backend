import { Module } from '@nestjs/common';
import { AdminProductsController } from './admin-products.controller';
import { AdminProductsService } from './admin-products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PorductSchema, Product } from 'src/products/product.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: PorductSchema }]),
  ],
  controllers: [AdminProductsController],
  providers: [AdminProductsService],
})
export class AdminProductsModule {}
