import Image from "next/image";
import styles from 'styles/card.module.css';
import Link from 'next/link';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/storeConfig/store";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getVideosRedux } from "@/redux/actions/movies";
import { Movie } from "@/entities/Movies";
import YouTube from "react-youtube";

export default function MovieCard({movieserv, id}) {
    const video = useSelector( (state: RootState) => state.videoReducer.video )
    const movies = useSelector( (state: RootState) => state.movieReducer.movies )
    const [movie, setMovie] = useState<Movie | undefined>(movies.find(moviee => moviee.id === parseInt(id)))
    const dispatch = useDispatch()
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 1,
        }
    }

    useEffect(() => {
      getVideosRedux(dispatch, movieserv, id)
      setMovie(movies.find(moviee => moviee.id === parseInt(id)))
    }, [dispatch]);


    // console.log('movieCrad', movie, movies, video)

    const _onReady = (event: any) => {
        event.target.pauseVideo();
    }

    return (
        <section className="card">
            <h1 className="mt-3">{movie?.original_title}</h1>
            <p className="mb-7">{movie?.release_date}</p>
            <div className="flex gap-20 justify-center">
                <Image src={movie?.poster_path ? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}` : '/movies/images/poster.jpg'} alt="affiche" width={200} height={300} sizes="50vw"/>
                <YouTube opts={opts} onReady={_onReady} videoId={`${video?.key}`}/>
            </div>
            <div >
                <p className="mb-7 mt-7 ml-8 mr-8">{movie?.overview}</p>
                
            </div>
        </section>
    )
}