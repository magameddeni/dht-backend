import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from 'src/products/models/product.model';
import { User } from 'src/user/user.model';
import mongoose, { HydratedDocument } from 'mongoose';

export type ReviewDocument = HydratedDocument<Review>;

@Schema({ timestamps: true })
export class Review {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  productId: Product;

  @Prop()
  color: string;

  @Prop({ default: false })
  isAnonym: boolean;

  @Prop({ required: true, min: 1, max: 5 })
  stars: number;

  @Prop()
  disAdvantages: string;

  @Prop()
  advantages: string;

  @Prop()
  comment: string;

  @Prop(
    raw([
      {
        key: { type: String },
        link: { type: String },
        type: { type: String, default: 'image' },
      },
    ]),
  )
  files: { key: string; link: string }[];
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
