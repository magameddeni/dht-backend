import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Review } from './review.model';
import { Model } from 'mongoose';
import { toObjectId } from 'src/utils/toObjectId';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(@InjectModel(Review.name) private reviewModel: Model<Review>) {}

  create({
    review,
    productId,
    userId,
  }: {
    review: CreateReviewDto;
    productId: string;
    userId: string;
  }) {
    return this.reviewModel.create({ ...review, productId, userId });
  }

  get(productId: string) {
    return this.reviewModel.aggregate([
      {
        $match: { productId: toObjectId(productId) },
      },
      {
        $lookup: {
          as: 'reviewer',
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          pipeline: [
            {
              $project: {
                _id: 0,
                name: 1,
              },
            },
          ],
        },
      },
      { $unwind: '$reviewer' },
      {
        $group: {
          _id: '$_id',
          color: { $first: '$color' },
          reviewer: { $first: '$reviewer.name' },
          disAdvantages: { $first: '$disAdvantages' },
          advantages: { $first: '$advantages' },
          comment: { $first: '$comment' },
        },
      },
    ]);
  }
}
