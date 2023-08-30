import {Movie} from '@/entities/Movies';
import MovieService from '@/service/service';
import { Video } from 'moviedb-promise';

export async function getMovies(service: MovieService, name:string ): Promise<Movie[] | undefined> {
   return await service.getMoviesTMDB(name);
}

export async function getMovieById(service: MovieService, id: string): Promise<Movie | undefined> {
   return await service.getMoviesTMDBById(id);
}

export async function getVideoById(service: MovieService, id: string): Promise<Video | undefined> {
   return await service.getTrailerTMDB(id);
}
