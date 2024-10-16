import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/products/product.model';
import { CreateAdminProductDto } from './dto/create-product.dto';

@Injectable()
export class AdminProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}
  create(payload: CreateAdminProductDto) {
    return this.productModel.create(payload);
  }

  get() {
    return this.productModel.aggregate([]);
  }
}
