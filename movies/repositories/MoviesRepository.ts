import { MovieResultsResponse } from 'moviedb-promise';
import { Movie } from '../entities/Movies';
import { IMoviesRepository } from './IMoviesRepository';
export default class MovieRepository implements IMoviesRepository {
    findById(id: string): Movie {
        throw new Error('Method not implemented.');
    }
    findBySearchName(name: string): Movie[] {
        throw new Error('Method not implemented.');
    }
    findAll(res: MovieResultsResponse): Movie[] {
       const movies = res.results!.map(movie => {
            return {
                original_title: movie.original_title!,
                overview: movie.overview!,
                release_date: movie.release_date!,
                poster_path: movie.poster_path!
            }
       })
       return movies
    }
    delete(id: string): boolean {
        throw new Error('Method not implemented.');
    }
}