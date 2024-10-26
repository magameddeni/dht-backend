import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Product, ProductDocument } from 'src/products/models/product.model';
import { CreateAdminProductDto } from './dto/create-product.dto';
import {
  ProductVariant,
  ProductVariantDocument,
} from 'src/products/models/product-variant.model';
import { CreateProductVariant } from './dto/create-product-variant.dto';

@Injectable()
export class AdminProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    @InjectModel(ProductVariant.name)
    private productVariantSchema: Model<ProductVariantDocument>,
  ) {}
  create(payload: CreateAdminProductDto) {
    return this.productModel.create(payload);
  }

  createProductVariant({
    product,
    productId,
  }: {
    product: CreateProductVariant;
    productId: ObjectId;
  }) {
    return this.productVariantSchema.create({ ...product, productId });
  }

  get() {
    return this.productModel.find();
  }
}
