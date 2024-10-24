import { Body, Controller, Get, Post } from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create.dto';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post()
  create(@Body() data: CreateShopDto) {
    return this.shopService.create(data);
  }

  @Get()
  get() {
    return this.shopService.get();
  }
}
