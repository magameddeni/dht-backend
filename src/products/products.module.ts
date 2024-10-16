import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PorductSchema, Product } from './product.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: PorductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
