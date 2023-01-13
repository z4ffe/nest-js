import { Controller, Get } from '@nestjs/common'

interface IPosts {
  id: number,
  test: string
}

@Controller('post')
export class PostController {
  posts: Array<IPosts>

  constructor() {
    this.posts = [
      { id: 1, test: 'One' },
      { id: 2, test: 'Two' },
      { id: 3, test: 'Three' }
    ]
  }

  @Get()
  async getAll() {

  }
}
