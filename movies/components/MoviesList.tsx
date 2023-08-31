// pages/MoviesList.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Movie } from '@/app/entities/Movies';
import Link from 'next/link';
import SearchBar from './SearchBar';
const sampleMovies: Movie[] = [
    {
      original_title: 'Film 1',
      release_date: '2023-08-01',
      poster_path: '/continuum.jpg',
      overview: 'Description du film 1',
    },
    {
      original_title: 'Film 2',
      release_date: '2023-08-15',
      poster_path: '/continuum.jpg',
      overview: 'Description du film 2',
    },
    {
      original_title: 'Film 3',
      release_date: '2023-08-15',
      poster_path: '/continuum.jpg',
      overview: 'Description du film 2',
    },
    {
      original_title: 'Film 4',
      release_date: '2023-08-15',
      poster_path: '/continuum.jpg',
      overview: 'Description du film 2',
    },
    // Ajoutez d'autres films ici
  ];

  const MoviesList = () => {
    
    return (
      <div className="movie-list">
        <SearchBar/>
        <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {sampleMovies.map((movie, index) => (
            <div key={index} style={{display: 'inline'}}>
              <Image
                src={movie.poster_path}
                alt={movie.original_title}
                width={400}
                height={300}
              />
              <Link href='/movie/details'>                

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
