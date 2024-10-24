import { IsArray, IsInt, IsNotEmpty, IsString } from 'class-validator';

class Image {
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
  images: Image[];

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
