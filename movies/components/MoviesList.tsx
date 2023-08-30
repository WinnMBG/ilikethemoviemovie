// pages/MoviesList.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Movie } from '@/entities/Movies';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/redux/storeConfig/store';
import { getMoviesRedux } from '@/redux/actions/movies';
import MovieService from '../service/service';
  const MoviesList = ({movieserv}) => {
    const movies = useSelector( (state: RootState) => state.movieReducer.movies )
    const dispatch = useDispatch()
  
    useEffect(() => {
      getMoviesRedux(dispatch, movieserv)
    }, [dispatch]);

    console.log('movies in function', movies)
  
    return (
      <div className="movie-list">
        <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {movies.map((movie, index) => (
            <div key={index} style={{display: 'inline'}}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                width={300}
                height={200}
              />
              <Link href={`/movie/${movie.id}`}>                
                    <h2 className="card-title">{movie.original_title}</h2>
                    <button className="card-button">Voir plus</button>
                </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default MoviesList;
