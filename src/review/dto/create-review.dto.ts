import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { ValidateCLassImage } from 'src/admin-products/dto/create-product-variant.dto';

export class CreateReviewDto {
  @IsString()
  color: string;

  @IsBoolean()
  isAnonym: boolean;

  @Min(1)
  @Max(5)
  @IsInt()
  @IsNotEmpty()
  stars: number;

  @IsString()
  disAdvantages: string;

  @IsString()
  advantages: string;

  @IsString()
  comment: string;

  //   files?: ValidateCLassImage[];
}
