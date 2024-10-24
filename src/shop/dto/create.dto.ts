import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateShopDto {
  @IsArray()
  @IsNotEmpty()
  phoneNumber: string[];

  @IsArray()
  @IsNotEmpty()
  address: string[];

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
