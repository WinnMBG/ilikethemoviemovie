import { configDotenv } from "dotenv";
import { MovieDb } from "moviedb-promise";
import { getMovies } from '../../../use_cases/methods';
import { Movie } from "@/entities/Movies";
import MovieRepository from '../../../repositories/MoviesRepository';
configDotenv();

export default class MovieService {
    private movieDb: MovieDb;
    private movieRepository: MovieRepository;
    constructor() {
        this.movieDb = new MovieDb(process.env.TMDB_API_KEY!)
        this.movieRepository = new MovieRepository()
    }

    public async getMoviesTMDB(): Promise<Movie[] | undefined> {
       try { 
            const results = await this.movieDb.searchMovie({query: ''})
            return this.movieRepository.findAll(results)
        } catch (e) {
            console.log(e)
        }
        return undefined
    }
    
}