

import store from '@/redux/storeConfig/store'
import Image from 'next/image'
// import { wrapper } from "@/redux/storeConfig/store"

"use client";
import MoviesList from '@/components/MoviesList';

import Link from 'next/link';
export default function Home() {
	return (
		<>
      <h2>
        <MoviesList/>
      </h2>
			
		</>
	);
}
