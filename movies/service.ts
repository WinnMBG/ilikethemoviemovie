import { configDotenv } from "dotenv";
import { MovieDb, Video } from "moviedb-promise";
import { getMovies } from './use_cases/methods';
import { Movie } from "@/entities/Movies";
import MovieRepository from './repositories/MoviesRepository';
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
        throw new Error('Movies not found')
    }

    public async getMoviesTMDBById(id: string): Promise<Movie | undefined> {
        try { 
             const result = await this.movieDb.movieInfo(id)
             return this.movieRepository.getMovieById(result)
         } catch (e) {
             console.log(e)
         }
         throw new Error('Movies not found')
    }

    public async getTrailerTMDB(id: string): Promise<Video> {
        try { 
             const result = await this.movieDb.movieVideos({id})
             return this.movieRepository.getMovieTrailer(result.results!)
         } catch (e) {
             console.log(e)
         }
         throw new Error('Movie videos not found')
    }
    
}