import {Movie} from '@/entities/Movies';
import { IMoviesRepository } from '@/repositories/IMoviesRepository';

export function getMovies(repo: IMoviesRepository): Movie[] {
   return repo.findAll();
}

export function getMovieById(repo: IMoviesRepository, id: string): Movie | undefined {
   return repo.findById(id);
}

export function getMoviesBySearchName(repo: IMoviesRepository, id: string): Movie | undefined {
   return repo.findById(id);
}

