import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from './product.model';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProductVariantDocument = HydratedDocument<ProductVariant>;

@Schema({ timestamps: true })
export class ProductVariant {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  productId: Product;

  @Prop({ required: true, default: 0 })
  discountPrice: number;

  @Prop({ required: true })
  regularPrice: number;

  @Prop({ required: true })
  stock: number;

  @Prop([{ key: { type: String }, link: { type: String } }])
  images: { key: string; link: string }[];

  @Prop(
    raw({
      hex: { type: String },
      name: { type: String },
    }),
  )
  color: {
    hex: string;
    name: string;
  }[];

  @Prop({ required: true, default: true })
  available: boolean;
}

export const ProductVariantSchema =
  SchemaFactory.createForClass(ProductVariant);
