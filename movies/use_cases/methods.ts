import {Movie} from '@/entities/Movies';
import MovieService from '@/service';

export async function getMovies(service: MovieService, name:string ): Promise<Movie[] | undefined> {
   return await service.getMoviesTMDB(name);
}

export async function getMovieById(service: MovieService, id: string): Promise<Movie | undefined> {
   return await service.getMoviesTMDBById(id);
}
