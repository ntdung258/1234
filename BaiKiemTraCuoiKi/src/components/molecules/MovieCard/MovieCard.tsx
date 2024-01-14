import React from 'react';
import styles from './MovieCard.module.scss';
import { Card, Image } from 'react-bootstrap';

export type TMovieCard = {
  imageUrl?: string;
  name: string;
  quality?: string;
  time?: string;
  className?: string;
};

const MovieCard: React.FC<TMovieCard> = ({ imageUrl, name, quality, time, className }) => {
  return (
    <Card className={`main-content ${className}`}>
      <div className='position-relative'>
        <Card.Img variant='top' src={imageUrl ? imageUrl : '/assets/img/default-img.jpg'} />
      </div>
      <div className={`d-flex justify-content-between align-items-center mt-3 ${styles.content}`}>
        <div className={`${styles.title}`}>{name}</div>
        <div className='d-flex'>
          <div className={`p-1 ms-1 ${styles.quality}`}>{quality}</div>
          {time && (
            <div className={`ms-2 p-1 d-flex align-items-center ${styles.info}`}>
              <Image src='/assets/img/icon-clock.svg' alt='Clock' />
              <div className='ms-1'>{time}</div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

MovieCard.defaultProps = {
  imageUrl: '/assets/img/default-img.jpg',
  quality: 'HD',
  time: '',
  className: '',
};

export default MovieCard;
