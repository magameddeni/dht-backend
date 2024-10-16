import { IsArray, IsNotEmpty, IsInt, IsString, Min } from 'class-validator';
import { ObjectId } from 'mongoose';

class Characteristics {
  @IsString()
  title: string;

  @IsArray()
  @Min(1, { message: 'Минимальное количество 1 категорий' })
  value: string[];
}

class Image {
  @IsString()
  link: string;

  @IsString()
  key: string;
}

export class CreateAdminProductDto {
  @IsNotEmpty()
  @IsString()
  productName: string;

  @IsArray()
  images: Image[];

  @IsArray()
  //   @Min(1, { message: 'Минимальное количество 1 категорий' })
  categories: ObjectId[];

  @IsNotEmpty()
  @IsInt()
  regularPrice: number;

  @IsNotEmpty()
  @IsInt()
  stock: number;

  @IsNotEmpty()
  @IsString()
  description: number;

  @IsArray()
  characteristics: Characteristics[];
}
