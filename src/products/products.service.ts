import { Get, Injectable } from '@nestjs/common';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  @Get()
  async get({ categoryId }: { categoryId?: string }) {
    // const pipeline = [{}];

    return await this.productModel.aggregate([
      {
        $match: {
          categories: categoryId,
        },
      },
    ]);
  }
}
