import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { PostModule } from './post/posts.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    database: 'nest_db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,

  }), UsersModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
