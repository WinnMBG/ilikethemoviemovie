import {Movie} from "../entities/Movies";
import { MovieResultsResponse } from "moviedb-promise/dist/request-types";

export interface IMoviesRepository {
    // create(post: Movie): Movie;
    findById(id: string): Movie;
    findBySearchName(name: string): Movie[];
    findAll(res: MovieResultsResponse): Movie[]
    delete(id: string): boolean;
}