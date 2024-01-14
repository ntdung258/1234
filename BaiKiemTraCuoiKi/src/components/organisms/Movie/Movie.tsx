import React from 'react';
import styles from './Movie.module.scss';
import { Image } from 'react-bootstrap';
import MovieCard from '../../molecules/MovieCard/MovieCard';
import { TMovie } from '../../../types';
import { Link } from 'react-router-dom';

export type TMovieProps = {
  movie: TMovie;
};

const Movie: React.FC<TMovieProps> = ({ movie }: TMovieProps) => {
  return (
    <section className='pt-5 pb-3'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className={`${styles.section__title}`}>New Release - Movies</div>
        <div className={`d-flex align-items-center`}>
          <div className={`${styles.viewAll} me-2`}>View all</div>
          <Image src='/assets/img/icon-arrow-white.svg' className='m-auto' alt='Next slide' />
        </div>
      </div>
      <div className='mt-4 row justify-content-between'>
        <div className='col-6 col-md-6 col-lg-3 mb-3'>
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <MovieCard
            name={movie.title}
            imageUrl={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ''}
          />
        </Link>
        </div>
      </div>
    </section>
  );
};

export default Movie;
