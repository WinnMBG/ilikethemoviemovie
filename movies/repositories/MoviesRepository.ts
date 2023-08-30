import { MovieResponse, MovieResultsResponse, Video } from 'moviedb-promise';
import { Movie } from '../entities/Movies';
import { IMoviesRepository } from './IMoviesRepository';

export default class MovieRepository implements IMoviesRepository {
    getMovieById(movie: MovieResponse): Movie {
        return {
            original_title: movie.original_title!,
            overview: movie.overview!,
            poster_path: movie.poster_path!,
            release_date: movie.release_date!
        }
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
    
    getMovieTrailer(videos: Video[]): Video {
        const trailers = videos.filter(video => video.type === 'Trailer')
        return trailers[0]
    }
}