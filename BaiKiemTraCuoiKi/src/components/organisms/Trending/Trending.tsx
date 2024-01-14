import React from 'react';
import styles from './Trending.module.scss';
import { Image } from 'react-bootstrap';
import TrendingCard from '../../molecules/TrendingCard/TrendingCard';
import { filter, includes, map, slice } from 'lodash';
import { TGenre, TMovie } from '../../../types';
import { Link } from 'react-router-dom';

export type TTrending = {
  movies: TMovie[];
  genres: TGenre[];
};

const Trending: React.FC<TTrending> = ({ movies, genres }: TTrending) => {
  return (
    <section className='pt-5 pb-3'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className={`${styles.section__title}`}>Trending</div>
        <div className={`d-flex align-items-center`}>
          <div className={`${styles.viewAll} me-2`}>View all</div>
          <Image src='/assets/img/icon-arrow-white.svg' className='m-auto' alt='Next slide' />
        </div>
      </div>

      <div className='mt-4 row justify-content-between'>
        {map(slice(movies, 0, 3), function (movie) {
          const filterGenres = filter(genres, (genre) => includes(movie.genre_ids, genre.id));
          const categories = filterGenres.map((genre) => genre.name);

          return (
            <div key={movie.id} className='col-md-4 mb-4 mb-md-0'>
              <Link to={`/movie/${movie.id}`} key={movie.id}>
              <TrendingCard
                name={movie.title}
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                categories={categories}
                star={movie.vote_average}
                isPlayed={movie.video}
              />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Trending;
