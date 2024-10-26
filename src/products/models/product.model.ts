import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Category } from 'src/category/category.model';
import { Shop } from 'src/shop/shop.model';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop()
  productName: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }])
  categories: Category[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Shop' })
  shop: Shop;

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

export const ProductSchema = SchemaFactory.createForClass(Product);
