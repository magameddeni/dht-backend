import { Get, Post, Body, Controller, UseGuards, Param } from '@nestjs/common';
import { AdminProductsService } from './admin-products.service';
import { CreateAdminProductDto } from './dto/create-product.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { CreateProductVariant } from './dto/create-product-variant.dto';
import { IdValidationPipe } from 'src/pipes/id-validation.pipe';
import { ObjectId } from 'mongoose';

@Controller('admin-products')
// @UseGuards(JwtAuthGuard)
export class AdminProductsController {
  constructor(private readonly adminProductService: AdminProductsService) {}

  @Post()
  create(@Body() data: CreateAdminProductDto) {
    return this.adminProductService.create(data);
  }

  @Post('/:productId')
  createProductVariant(
    @Body() data: CreateProductVariant,
    @Param('productId', IdValidationPipe) productId: ObjectId,
  ) {
    return this.adminProductService.createProductVariant({
      product: data,
      productId,
    });
  }

  @Get()
  get() {
    return this.adminProductService.get();
  }
}
