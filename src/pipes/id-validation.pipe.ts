import {
  Injectable,
  ArgumentMetadata,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { Types } from 'mongoose';
@Injectable()
export class IdValidationPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (metadata.type != 'param') return value;
    if (!Types.ObjectId.isValid(value))
      throw new BadRequestException('Id is not valid');
    return value;
  }
}
