import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({ timestamps: true })
export class Category {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, type: Number })
  nesting: number;

  @Prop({ required: true })
  icon: string;
}

// @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Courier' })
// courier: Courier;

export const CategorySchema = SchemaFactory.createForClass(Category);
