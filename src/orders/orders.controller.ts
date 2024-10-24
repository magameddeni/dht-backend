import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  // todo
  @Post()
  create(@Body() data: any) {
    return this.orderService.create(data);
  }
}
