import Link from 'next/link';
import MovieCard from '@/components/MovieCard';

export default function Home() {
	return (
		<>
			<Link href='/'>Home</Link>
            <MovieCard/>
		</>
	);
}