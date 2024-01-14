import React from 'react';
import styles from './TrendingCard.module.scss';
import { Card, Image } from 'react-bootstrap';
import Scrollbars from 'react-custom-scrollbars-2';

type TTrendingCard = {
  name: string;
  imageUrl: string;
  categories?: string[];
  time?: string;
  star?: number;
  isPlayed?: boolean;
};

const TrendingCard: React.FC<TTrendingCard> = ({ name, imageUrl, categories, time, star, isPlayed }) => {
  return (
    <Card className='main-content'>
      <div className='position-relative'>
        <Card.Img variant='top' src={imageUrl} />
        {isPlayed && (
          <Image
            src='/assets/img/btn-play.svg'
            className='position-absolute top-0 bottom-0 start-0 end-0 m-auto'
            alt='Button Play'
          />
        )}

        {time && (
          <div className={`position-absolute d-flex align-items-center ${styles.time}`}>
            <Image src='/assets/img/icon-clock.svg' alt='Clock' />
            <div className='ms-1'>{time}</div>
          </div>
        )}
        {star && (
          <div className={`position-absolute d-flex align-items-center ${styles.rate}`}>
            <Image src='/assets/img/icon-star.svg' alt='Star' />
            <div className='ms-1'>{star}</div>
          </div>
        )}
      </div>

      <div className={`row justify-content-between align-items-center mt-3 ${styles.content}`}>
        <div className={`col-6 pe-0 ${styles.title}`}>{name}</div>
        <div className='col-6 ps-0'>
          {categories?.length ? (
            <Scrollbars autoHeight className='d-flex justify-content-end w-100 text-nowrap'>
              {categories.map((category, index) => (
                <div key={index} className={`ms-2 p-1 ${styles.genre}`}>
                  {category}
                </div>
              ))}
            </Scrollbars>
          ) : null}
        </div>
      </div>
    </Card>
  );
};

TrendingCard.defaultProps = {
  categories: [],
  time: '',
  star: 10,
  isPlayed: false,
};

export default TrendingCard;
