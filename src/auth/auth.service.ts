import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { userRegistrationDto } from './dto/user-create.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async createUser(payload: userRegistrationDto) {
    const { phoneNumber, password } = payload;
    const candidate = await this.usersService.findOne(phoneNumber);

    if (candidate)
      throw new HttpException(
        'Пользователь с таким номером уже зарегистрирован',
        400,
      );

    const hashPassword = await bcrypt.hash(password, 10);

    return this.usersService.create({
      phoneNumber,
      password: hashPassword,
    });
  }

  async validateUser(phoneNumber: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(phoneNumber);
    // TODO - вернуть документ без пароля для jwt
    if (user && (await bcrypt.compare(pass, user.password))) return user;
    return null;
  }

  async login(user: any) {
    console.log(user);

    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
