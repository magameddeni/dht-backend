import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get('/:categoryId')
  get(@Query() params: any, @Param('categoryId') categoryId: string) {
    return this.productService.get({ categoryId, ...params });
  }
}
