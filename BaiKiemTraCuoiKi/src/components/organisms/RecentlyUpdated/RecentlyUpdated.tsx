import React from 'react';
import styles from './RecentlyUpdated.module.scss';
import RecentlyUpdatedCard from '../../molecules/RecentlyUpdatedCard/RecentlyUpdatedCard';
import { map, slice } from 'lodash';
import { format, parse } from 'date-fns';
import { TMovie } from '../../../types';
import { Link } from 'react-router-dom';

export type TRecentlyUpdated = {
  movies: TMovie[];
};

const RecentlyUpdated: React.FC<TRecentlyUpdated> = ({ movies }: TRecentlyUpdated) => {
  return (
    <section className='pt-5 pb-3'>
      <div className={`${styles.section__title}`}>Recently Updated</div>
      <div className='mt-4 row justify-content-between align-items-center'>
        <div className='row justify-content-between align-items-center col-9 col-md-11'>
          {map(slice(movies, 0, 4), function (movie) {
            return (
              <div key={movie.id} className='col-md-6 col-lg-3 mb-2'>
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                <RecentlyUpdatedCard
                  name={movie.title}
                  imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  description='Series/S 2/EP 9'
                  date={movie.release_date && format(parse(movie.release_date, 'yyyy-MM-dd', new Date()), 'dd/MM/yy')}
                />
                </Link>
              </div>
            );
          })}
        </div>
        <div className='col-3 col-md-1 mb-2'>
          <div className={`d-flex float-md-end m-auto ${styles.nextSlide}`}>
            <img src='/assets/img/icon-arrow.svg' className='m-auto' alt='Next slide' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyUpdated;
