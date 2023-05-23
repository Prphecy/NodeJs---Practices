import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
    private userService: UsersService,
  ) {}

  async createPost(post: CreatePostDto) {
    const userFound = await this.userService.getUser(post.authorId);
    if (!userFound)
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
      const newPost = this.postsRepository.create(post)
      return this.postsRepository.save(newPost);
  }
  getPosts() {
    return this.postsRepository.find({
      relations: ['author']
    })
  }
}
