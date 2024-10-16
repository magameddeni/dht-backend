import {
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Controller,
} from '@nestjs/common';
import { AdminProductsService } from './admin-products.service';
import { CreateAdminProductDto } from './dto/create-product.dto';

@Controller('admin-products')
export class AdminProductsController {
  constructor(private readonly adminProductService: AdminProductsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() data: CreateAdminProductDto) {
    return this.adminProductService.create(data);
  }

  @Get()
  get() {
    return this.adminProductService.get();
  }
}
