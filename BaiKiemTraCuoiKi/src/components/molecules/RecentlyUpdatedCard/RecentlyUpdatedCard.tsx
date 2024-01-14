import React from 'react';
import styles from './RecentlyUpdatedCard.module.scss';
import { Image } from 'react-bootstrap';

type TRecentlyUpdatedCard = {
  name: string;
  imageUrl: string;
  description?: string;
  date?: string;
};

const RecentlyUpdatedCard: React.FC<TRecentlyUpdatedCard> = ({ name, imageUrl, description, date }) => {
  return (
    <div className={`d-flex justify-content-start align-items-center ${styles.card}`}>
      <Image src={imageUrl} alt='Recently Updated' />
      <div className={`ms-3 ms-lg-1 ms-xl-3 ${styles.info}`}>
        <div>{name}</div>
        <div>
          {description} <br />
          {date}
        </div>
      </div>
    </div>
  );
};

export default RecentlyUpdatedCard;
