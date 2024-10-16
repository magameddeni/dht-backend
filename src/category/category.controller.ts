import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  categories() {
    return this.categoryService.get();
  }

  @Get('/:categoryId')
  category(@Param('categoryId') categoryId: string) {
    return this.categoryService.get(categoryId);
  }
}
