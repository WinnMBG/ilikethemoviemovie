import {Movie} from '@/entities/Movies';
import MovieService from '@/service';

export async function getMovies(service: MovieService): Promise<Movie[] | undefined> {
   return await service.getMoviesTMDB();
}

export async function getMovieById(service: MovieService, id: string): Promise<Movie | undefined> {
   return await service.getMoviesTMDBById(id);
}

// export function getMoviesBySearchName(service: MovieService, id: string): Movie | undefined {
//    return repo.findById(id);
// }

