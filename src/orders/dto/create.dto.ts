import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateOrderProductsDto {
  @IsString()
  @IsNotEmpty()
  productId: ObjectId;

  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  quantity: number;

  @IsInt()
  @IsNotEmpty()
  price: number;
}

export class CreateOrderDto {
  @ValidateNested()
  @IsNotEmpty()
  @IsArray()
  products: CreateOrderProductsDto[];

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  totalPrice: number;

  @IsString()
  @IsNotEmpty()
  orderNumber: string;
}
