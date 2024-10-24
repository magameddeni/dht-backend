import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userRegistrationDto } from './dto/user-create.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('registration')
  registration(@Body() body: userRegistrationDto) {
    return this.authService.createUser(body);
  }

  @Post()
  async login(@Body() body: userRegistrationDto) {
    const { phoneNumber, password } = body;
    const validateUser = await this.authService.validateUser(
      phoneNumber,
      password,
    );

    if (!validateUser)
      throw new HttpException('Неверный пароль или логин', 400);

    validateUser.password = null;

    return this.authService.login(validateUser);
  }
}
