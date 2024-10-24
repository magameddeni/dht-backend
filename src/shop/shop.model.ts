import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class Shop {
  @Prop()
  phoneNumber: string[];

  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  address: string[];

  @Prop()
  description: string;
}

export type ShopDocumewnt = HydratedDocument<Shop>;
export const ShopSchema = SchemaFactory.createForClass(Shop);
