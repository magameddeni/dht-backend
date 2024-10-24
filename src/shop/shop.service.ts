import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Shop } from './shop.model';
import { Model } from 'mongoose';
import { CreateShopDto } from './dto/create.dto';

@Injectable()
export class ShopService {
  constructor(@InjectModel(Shop.name) private shopModel: Model<Shop>) {}

  create(payload: CreateShopDto) {
    return this.shopModel.create(payload);
  }

  get() {
    return this.shopModel.find();
  }
}
