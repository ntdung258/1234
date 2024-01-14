import React from 'react';
import { Image } from 'react-bootstrap';
import SeriesCard from '../../molecules/SeriesCard/SeriesCard';
import styles from './Series.module.scss';

const Series: React.FC = () => {
  return (
    <section className='series pt-5 pb-3'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className={`${styles.sectionTitle}`}>New Release - Series</div>
        <div className={`d-flex align-items-center`}>
          <div className={`${styles.viewAll} me-2`}>View all</div>
          <Image src='/assets/img/icon-arrow-white.svg' className='m-auto' alt='Next slide' />
        </div>
      </div>

      <div className='mt-4 row justify-content-between'>
        <div className='col-6 col-md-6 col-lg-3 mb-3'>
          <SeriesCard name='Silo' imageUrl='/assets/img/Silo.svg' season='Season 1' ep='EP 6' />
        </div>
        <div className='col-6 col-md-6 col-lg-3 mb-3'>
          <SeriesCard name='Black Knight' imageUrl='/assets/img/Black-Knight.svg' season='Season 1' ep='EP 6' />
        </div>
        <div className='col-6 col-md-6 col-lg-3 mb-3'>
          <SeriesCard name='Drops of God' imageUrl='/assets/img/Drops-of-God.svg' season='Season 1' ep='EP 6' />
        </div>
        <div className='col-6 col-md-6 col-lg-3 mb-3'>
          <SeriesCard name='The Night Agent' imageUrl='/assets/img/The-Night-Agent.svg' season='Season 1' ep='EP 6' />
        </div>
      </div>
    </section>
  );
};

export default Series;
