import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import MovieCard from '../../molecules/MovieCard/MovieCard';
import styles from './Recommended.module.scss';
import { filter, head, includes, map, slice } from 'lodash';
import { TGenre, TMovie } from '../../../types';

export type TTrending = {
  movies: TMovie[];
  genres: TGenre[];
};

const Recommended: React.FC<TTrending> = ({ movies, genres }: TTrending) => {
  const [genre, setGenre] = useState<TGenre>();

  useEffect(() => {
    setGenre(head(genres));
  }, [genres]);

  const filterMovies = genre ? filter(movies, (movie) => includes(movie.genre_ids, genre.id)) : [];

  const onCLickGenre = (genre: TGenre): void => {
    setGenre(genre);
  };

  return (
    <section className='recommended pt-5 pb-3'>
      <div className='row justify-content-between align-items-md-start'>
        <div className='col-md-9 col-lg-10 col-7 row'>
          <div className={`col-md-12 col-lg-3 col-xl-2 me-lg-5 me-xl-5 ${styles.sectionTitle}`}>Recommended</div>
          <div className='col-md-7 col-xl-9 mt-md-0 mt-1 d-none d-md-block'>
            <div className='row justify-content-start'>
              {genre &&
                map(slice(genres, 0, 3), function (genreItem) {
                  return (
                    <div
                      key={genreItem.id}
                      className={`col-auto ms-4 mb-4 d-flex justify-content-center align-items-center text-nowrap
                      c-pointer p-1 ${genre.id === genreItem.id ? styles.genreActive : styles.genre}`}
                      onClick={() => onCLickGenre(genreItem)}
                    >
                      {genreItem.name}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className='col-md-3 col-lg-2 col-5'>
          <div className='d-flex justify-content-end align-items-end'>
            <div className={`${styles.viewAll}`}>
              View all <Image src='/assets/img/icon-arrow-white.svg' className='m-auto' alt='Next slide' />
            </div>
          </div>
        </div>

        <div className='col-12 mt-md-0 mt-2 d-block d-md-none'>
          <div className='row container'>
            {genre &&
              map(slice(genres, 0, 3), function (genreItem) {
                return (
                  <div
                    key={genreItem.id}
                    className={`col-auto me-3 text-nowrap
                      c-pointer p-1 ${genre.id === genreItem.id ? styles.genreActive : styles.genre}`}
                    onClick={() => onCLickGenre(genreItem)}
                  >
                    {genreItem.name}
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className='mt-4 row'>
        {map(slice(filterMovies, 0, 8), function (movie) {
          return (
            <div className='col-6 col-md-6 col-lg-3 mb-2' key={movie.id}>
              <MovieCard
                className='mb-4'
                name={movie.title}
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Recommended;
