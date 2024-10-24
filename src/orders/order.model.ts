import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Product } from 'src/products/product.model';
import { User } from 'src/user/user.model';
import { orderStatus } from './constants';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop(
    raw([
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        productName: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ]),
  )
  products: {
    productId: Product;
    productName: string;
    quantity: number;
    price: number;
  }[];

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ required: true })
  orderNumber: string;

  @Prop({
    required: true,
    default: orderStatus.CREATED,
    enum: Object.values(orderStatus),
  })
  status: string;

  courier: {
    phoneNumber: string;
    carNumber: string;
    name: string;
  };
}

export const OrderSchema = SchemaFactory.createForClass(Order);
