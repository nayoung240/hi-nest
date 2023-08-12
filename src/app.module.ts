import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MovieController } from './movie/movie.controller';
import { MovieService } from './movie/movie.service';

@Module({
  imports: [],
  controllers: [MovieController],
  providers: [AppService, MovieService],
})
export class AppModule {}
