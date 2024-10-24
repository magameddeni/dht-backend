import { IsArray, IsNotEmpty, IsString, Min } from 'class-validator';
import { ObjectId } from 'mongoose';

class Characteristics {
  @IsString()
  title: string;

  @IsArray()
  @Min(1, { message: 'Минимальное количество 1 категорий' })
  value: string[];
}

export class CreateAdminProductDto {
  @IsNotEmpty()
  @IsString()
  productName: string;

  @IsArray()
  @IsNotEmpty()
  categories: ObjectId[];

  @IsNotEmpty()
  @IsString()
  description: number;

  @IsArray()
  @IsNotEmpty()
  characteristics: Characteristics[];
}
