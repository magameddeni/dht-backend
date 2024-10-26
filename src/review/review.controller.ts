import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { IdValidationPipe } from 'src/pipes/id-validation.pipe';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post('/product/:productId')
  create(
    @Param('productId', IdValidationPipe) productId: string,
    @Body() data: CreateReviewDto,
  ) {
    return this.reviewService.create({
      review: data,
      productId,
      // TODO
      userId: '671030a0fb578293814bd7d0',
    });
  }

  @Get('/product/:productId')
  get(@Param('productId', IdValidationPipe) productId: string) {
    return this.reviewService.get(productId);
  }
}
