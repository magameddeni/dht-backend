import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Category } from 'src/category/category.model';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop()
  productName: string;

  @Prop(
    raw([
      {
        key: { type: String, required: true },
        link: { type: String, required: true },
      },
    ]),
  )
  images: { key: string; link: string }[];

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Category.name }])
  categories: Category[];

  @Prop({ required: true })
  regularPrice: number;

  @Prop({ required: true, default: 0 })
  discountPrice: number;

  @Prop()
  description: string;

  @Prop({ required: true })
  stock: number;

  @Prop(
    raw([
      {
        title: { type: String },
        value: [{ type: String }],
      },
    ]),
  )
  characteristics: { title: string; value: string[] }[];
}

// @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Courier' })
// courier: Courier;

export const PorductSchema = SchemaFactory.createForClass(Product);
