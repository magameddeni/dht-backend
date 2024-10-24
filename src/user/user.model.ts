import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ROLES_ENUMS } from './constants';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    type: [String],
    required: true,
    default: ['user'],
    enum: ROLES_ENUMS,
  })
  roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
