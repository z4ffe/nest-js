import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CreatePostDto } from './dto/CreatePost.dto'
import { UpdatePostDto } from './dto/UpdatePost.dto'
import { PostService } from './post.service'


@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {
  }

  @Get()
  private async getAll() {
    return this.postService.getAll()
  }

  @Get(':id')
  private async getPostById(@Param('id') id: string) {
    return this.postService.getPostById(id)
  }

  @Post()
  private async addPost(@Body() dto: CreatePostDto) {
    return this.postService.addPost(dto)
  }

  @Put(':id')
  private async updatePostById(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    return this.postService.updatePostById(id, dto)
  }

  @Delete(':id')
  private async deletePostById(@Param('id') id: string) {
    return this.postService.deletePostById(id)
  }
}
