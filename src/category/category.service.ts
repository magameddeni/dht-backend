import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './category.model';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async get(categoryId?: string) {
    if (categoryId) return this.categoryModel.findById(categoryId);
    return this.categoryModel.find();
  }
}
