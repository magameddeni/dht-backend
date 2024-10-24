import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { IdValidationPipe } from 'src/pipes/id-validation.pipe';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get('/:productId')
  getProuct(@Param('productId', IdValidationPipe) productId: string) {
    return this.productService.getProduct(productId);
  }

  @Get('/category/:categoryId')
  get(@Query() params: any, @Param('categoryId') categoryId: string) {
    return this.productService.get({ categoryId, ...params });
  }
}
