import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreatePostDto } from './dto/CreatePost.dto'
import { UpdatePostDto } from './dto/UpdatePost.dto'
import { PostEntity } from './post.entity'

@Injectable()
export class PostService {
  constructor(@InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>) {
  }

  async getAll() {
    return this.postRepository.find()
  }
  async getPostById(id: string) {
    return this.postRepository.findOne({
      where: {
        id: Number(id)
      }
    })
  }

  async addPost(dto: CreatePostDto) {
    const post = this.postRepository.create(dto)
    return this.postRepository.save(post)
  }

  async updatePostById(id: string, dto: UpdatePostDto) {
    const post = await this.getPostById(id)
    if (!post) return { message: 'Post not found' }
    post.text = dto.text
    return this.postRepository.save(post)
  }

  async deletePostById(id: string) {
    return this.postRepository.delete({
      id: Number(id)
    })
  }
}
