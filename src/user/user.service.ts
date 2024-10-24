import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { userRegistrationDto } from 'src/auth/dto/user-create.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(payload: userRegistrationDto): Promise<string> {
    await this.userModel.create(payload);
    return 'Пользователь успешно зарегистрирован';
  }

  findOne(phoneNumber: string) {
    return this.userModel.findOne({ phoneNumber });
  }
}
