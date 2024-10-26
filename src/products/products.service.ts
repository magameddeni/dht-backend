import { Get, Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './models/product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { toObjectId } from 'src/utils/toObjectId';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productsModel: Model<ProductDocument>,
  ) {}

  @Get()
  async getProduct(productId: string) {
    const data = await this.productsModel.aggregate([
      { $match: { _id: toObjectId(productId) } },
      {
        $lookup: {
          as: 'colors',
          from: 'productvariants',
          foreignField: 'productId',
          localField: '_id',
        },
      },
      {
        $lookup: {
          as: 'similar',
          from: 'products',
          let: { categoryId: { $last: '$categories' }, productId: '$_id' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $ne: ['$$productId', '$_id'] },
                    { $in: ['$$categoryId', '$categories'] },
                  ],
                },
              },
            },
            {
              $lookup: {
                as: 'similarProducts',
                from: 'productvariants',
                foreignField: 'productId',
                localField: '_id',
              },
            },
            { $unwind: { path: '$similarProducts' } },
            {
              $addFields: {
                categoryId: '$$categoryId',
                discountPrice: '$similarProducts.discountPrice',
                regularPrice: '$similarProducts.regularPrice',
                stock: '$similarProducts.stock',
              },
            },
            {
              $sort: {
                discountPrice: 1,
                regularPrice: 1,
                stock: 1,
              },
            },
            {
              $group: {
                _id: '$_id',
                colors: { $push: '$similarProducts.color' },
                images: { $first: '$similarProducts.images' },
                productName: { $first: '$productName' },
                stock: { $first: '$similarProducts.stock' },
                regularPrice: { $first: '$similarProducts.regularPrice' },
                discountPrice: { $first: '$similarProducts.discountPrice' },
              },
            },
            { $limit: 20 },
          ],
        },
      },
      {
        $lookup: {
          as: 'reviews',
          foreignField: 'productId',
          localField: '_id',
          from: 'reviews',
          pipeline: [
            {
              $lookup: {
                as: 'reviewer',
                from: 'users',
                localField: 'userId',
                foreignField: '_id',
              },
            },
            { $unwind: '$reviewer' },
            {
              $group: {
                _id: '$_id',
                color: { $first: '$color' },
                reviewer: { $first: '$reviewer.name' },
                disAdvantages: { $first: '$disAdvantages' },
                advantages: { $first: '$advantages' },
                comment: { $first: '$comment' },
              },
            },
            { $limit: 3 },
            { $sort: { createdAt: 1 } },
          ],
        },
      },
      {
        $sort: {
          createdAt: 1,
        },
      },
    ]);

    return data[0];
  }

  @Get()
  get({ categoryId }: { categoryId?: string }) {
    const pipeline = [
      {
        $lookup: {
          as: 'colors',
          from: 'productvariants',
          foreignField: 'productId',
          localField: '_id',
        },
      },
    ];

    if (!categoryId) return this.productsModel.aggregate(pipeline);
    if (categoryId)
      return this.productsModel.aggregate([
        {
          $match: {
            categories: categoryId,
          },
        },
        ...pipeline,
      ]);
  }
}
