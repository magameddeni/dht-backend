import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './order.model';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  // TODO
  create(orderDto: CreateOrderDto) {
    return this.orderModel.create({
      ...orderDto,
      user: '671030a0fb578293814bd7d0',
      orderNumber: 'null',
      totalPrice: 0,
    });
  }
}
