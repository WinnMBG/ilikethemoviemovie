'use client';
import Link from 'next/link';
import MovieCard from '@/components/MovieCard';
import MovieService from '@/service/service';

type Params = {
    params: {
        id: string
    }
}

export type MovieCardProps = {
	movieserv: MovieService
	id: string
}


export default function Home({ params: { id } }: Params) {
	const movieService = new MovieService();
	return (
		<>
            <MovieCard movieserv={movieService} id={id}/>
		</>
	);
}