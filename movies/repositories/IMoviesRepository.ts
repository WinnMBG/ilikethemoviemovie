import {Movie} from "../entities/Movies";
import { MovieResponse, MovieResultsResponse, Video } from "moviedb-promise/dist/request-types";

export interface IMoviesRepository {
    // create(post: Movie): Movie;
    getMovieById(movie: MovieResponse): Movie;
    findBySearchName(name: string): Movie[];
    findAll(res: MovieResultsResponse): Movie[]
    getMovieTrailer(videos: Video[]): Video;
}