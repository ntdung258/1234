import React from 'react';
import { Badge, Carousel, Image } from 'react-bootstrap';
import styles from './SliderItem.module.scss';
import { format, parse } from 'date-fns';
import { find } from 'lodash';
import { TGenre, TMovie } from '../../../types';
import { Link } from "react-router-dom";

export type ISliderItem = {
  genres: TGenre[];
  movie: TMovie;
};

const SliderItem: React.FC<ISliderItem> = ({ genres, movie }: ISliderItem) => {
  return (
    <>
      <Link to={`/movie/${movie.id}`} key={movie.id}>
        <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className='w-100' alt='Slider' />
        <Carousel.Caption className={`mb-md-3 ${styles.mainCarousel}`}>
          <div className={`${styles.title}`}>{movie.title}</div>
          <div className='mt-md-3 row'>
            <div className='col-auto'>
              {movie.genre_ids.map((genre, index) => {
                return (
                  <Badge key={index} bg='light' text='dark' className={`${styles.badge} me-2 p-2 col-auto`}>
                    {find(genres, { id: genre })?.name}
                  </Badge>
                );
              })}
            </div>
            <div className='col-auto d-flex align-items-center me-md-2 ms-md-3'>
              <Image src='/assets/img/icon-calendar.svg' alt='Clock' />
              <div className={`${styles.badge} ms-2`}>
                {movie.release_date && format(parse(movie.release_date, 'yyyy-MM-dd', new Date()), 'Y')}
              </div>
            </div>
            {/* <div className='col-auto d-flex align-items-center me-md-2 ms-md-3'>
              <Image src='/assets/img/icon-clock.svg' alt='Clock' />
              <div className={`${styles.badge} ms-2`}>3:12:00</div>
            </div> */}
            <div className='col-auto d-flex align-items-center me-md-2 ms-md-3'>
              <Image src='/assets/img/icon-star.svg' alt='Clock' />
              <div className={`${styles.badge} ms-2`}>{movie.vote_average}</div>
            </div>
          </div>
          <div className={`${styles.description} mt-1 mt-md-3 mb-4 mb-md-5`}>{movie.overview}</div>
        </Carousel.Caption>
      </Link>
    </>
  );
};

export default SliderItem;
