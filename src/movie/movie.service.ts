import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MovieService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);

    if (!movie) {
      throw new NotFoundException('찾을 수 없습니다.');
    }

    return movie;
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: string, movieData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({
      ...movie,
      ...movieData,
    });
  }
}
