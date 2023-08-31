'use client';
import Image from 'next/image'
// import { wrapper } from "@/redux/storeConfig/store"

"use client";
import MoviesList from '@/components/MoviesList';

import Link from 'next/link';
import MovieService from '../service/service';
export default function Home() {
	const movieService = new MovieService()
	return (
		<>
      <h2>
        <MoviesList movieserv={movieService}/>
      </h2>
			
		</>
	);
}
