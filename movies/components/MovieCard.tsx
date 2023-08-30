import Image from "next/image";
import styles from 'styles/card.module.css';
import Link from 'next/link';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/storeConfig/store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getVideosRedux } from "@/redux/actions/movies";
import { Movie } from "@/entities/Movies";

export default function MovieCard({movieserv, id}) {
    const video = useSelector( (state: RootState) => state.videoReducer.video )
    const movies = useSelector( (state: RootState) => state.movieReducer.movies )
    const [movie, setMovie] = useState<Movie | undefined>(movies.find(moviee => moviee.id === parseInt(id)))
    const dispatch = useDispatch()
  
    useEffect(() => {
      getVideosRedux(dispatch, movieserv, id)
      setMovie(movies.find(moviee => moviee.id === parseInt(id)))
    }, [dispatch]);


    // console.log('movieCrad', movie, movies, video)

    return (
        <section className="card">
            <Image src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="affiche" width={200} height={300} sizes="50vw"/>
            <div >
                <h2>{movie?.original_title}</h2>
                <p>{movie?.overview}</p>
                <Link href='/'>
                    Revenir à la page de recherche
                </Link>
            </div>
        </section>
    )
}