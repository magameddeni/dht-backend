import { IsNotEmpty, IsString } from 'class-validator';

export class userRegistrationDto {
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
