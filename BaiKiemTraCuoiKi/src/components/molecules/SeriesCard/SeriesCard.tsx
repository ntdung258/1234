import React from 'react';
import styles from './SeriesCard.module.scss';
import { Card } from 'react-bootstrap';

export type TSeriesCard = {
  imageUrl?: string;
  name: string;
  quality?: string;
  season?: string;
  ep?: string;
};

const SeriesCard: React.FC<TSeriesCard> = ({ imageUrl, name, quality, season, ep }) => {
  return (
    <Card className='main-content'>
      <div className='position-relative'>
        <Card.Img variant='top' src={imageUrl} />
        {ep ? (
          <div className={`position-absolute d-flex align-items-center ${styles.series}`}>
            <span className={`badge ${styles.bgColorRed}`}>{ep}</span>
          </div>
        ) : null}
      </div>
      <div className={`d-flex justify-content-between align-items-center mt-3 ${styles.content}`}>
        <div className={`${styles.title}`}>{name}</div>
        <div className='d-flex'>
          <div className={`p-1 ms-1 text-nowrap ${styles.quality}`}>{quality}</div>
          {season ? (
            <div className={`ms-2 p-1 d-flex align-items-center text-nowrap ${styles.info}`}>{season}</div>
          ) : null}
        </div>
      </div>
    </Card>
  );
};

SeriesCard.defaultProps = {
  imageUrl: '',
  quality: 'HD',
};

export default SeriesCard;
