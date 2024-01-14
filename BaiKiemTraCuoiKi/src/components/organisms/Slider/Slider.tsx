import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import styles from './Slider.module.scss';
import SliderItem from '../../molecules/SliderItem/SliderItem';
import { TGenre, TMovie } from '../../../types';
import { map, slice } from 'lodash';

export type ISlider = {
  movies: TMovie[];
  genres: TGenre[];
};

const Slider: React.FC<ISlider> = ({ genres, movies }: ISlider) => {
  return (
    <section className='slider position-relative'>
      <Carousel controls={false}>
        {map(slice(movies, 0, 6), function (movie) {
          return (
            <Carousel.Item key={movie.id}>
              <SliderItem movie={movie} genres={genres} />
            </Carousel.Item>
          );
        })}
      </Carousel>

      <div className={`position-absolute d-flex ${styles.wrapBtn}`}>
        <div className={`d-flex justify-content-center align-items-center me-2 me-md-5 ${styles.btnWatchNow}`}>
          <div className='me-2'>Watch Now</div>
          <Image src='/assets/img/icon-play.svg' alt='Play' />
        </div>
        <div className={`d-flex justify-content-center align-items-center ${styles.btnWatchLater}`}>
          <div className='me-2'>Watch Later</div>
          <Image src='/assets/img/icon-clock-2.svg' alt='Clock' />
        </div>
      </div>
    </section>
  );
};

export default Slider;
