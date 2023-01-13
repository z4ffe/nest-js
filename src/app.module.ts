import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PostModule } from './post/post.module'
import {PostEntity} from './post/post.entity'

@Module({
  imports: [TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: () => ({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'root',
      password: process.env.DB_PW,
      database: 'nestjs',
      entities: [PostEntity],
      synchronize: true,
    }),
    inject: [ConfigService],
  }), PostModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService]
})


export class AppModule {
}


