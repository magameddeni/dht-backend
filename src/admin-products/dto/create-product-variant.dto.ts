import { IsArray, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class ValidateCLassImage {
  type?: string;

  @IsString()
  link: string;

  @IsString()
  key: string;
}

class Color {
  @IsString()
  hex: string;
  @IsString()
  name: string;
}

export class CreateProductVariant {
  @IsArray()
  @IsNotEmpty()
  images: ValidateCLassImage[];

  @IsNotEmpty()
  color: Color;

  @IsNotEmpty()
  @IsInt()
  regularPrice: number;

  @IsNotEmpty()
  @IsInt()
  discountPrice: number;

  @IsNotEmpty()
  @IsInt()
  stock: number;
}
