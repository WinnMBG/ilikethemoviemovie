// pages/MoviesList.js
"use client"
import SearchBar from './Searchbar';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Movie } from '@/entities/Movies';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/redux/storeConfig/store';
import { getMoviesRedux } from '@/redux/actions/movies';
import MovieService from '../service/service';
import { MovieListProps } from '@/app/page';
  const MoviesList = (props: MovieListProps) => {
    const movies: Movie[] = useSelector( (state: RootState) => state.movieReducer.movies )
    const [searchText, setSearchText] = useState(undefined);
    const dispatch = useDispatch()
  
    useEffect(() => {
      getMoviesRedux(dispatch, props.movieserv, searchText)
    }, [dispatch, searchText]);

  
    return (
      <div className="movie-list">
        <SearchBar searchText={searchText} setSearchText={setSearchText}/>
        <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {movies.map((movie, index) => (
            <div key={index} style={{display: 'inline'}}>
              <Image
                src={movie?.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : '/poster.jpg'}
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
