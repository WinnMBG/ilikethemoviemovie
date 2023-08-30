// pages/MoviesList.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Movie } from '@/app/entities/Movies';
import Link from 'next/link';

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
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const getColumnCount = () => {
      if (windowSize.width < 600) return 1;
      if (windowSize.width < 870) return 2;
      if (windowSize.width < 1200) return 3;
      return 4;
    };
  
    return (
      <div className="movie-list">
        <div className="max-w-2xl mx-auto px-4 py-8 lg:max-w7xl grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl-grid-cols-4">
          {sampleMovies.map((movie, index) => (
            <div key={index} style={{display: 'inline'}}>
              <Image
                src={movie.poster_path}
                alt={movie.original_title}
                width={300}
                height={200}
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
