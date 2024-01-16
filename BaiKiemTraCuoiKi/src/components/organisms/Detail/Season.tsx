import React from 'react';
import { TSeason } from '../../../types';
import styles from './Detail.module.scss';

export type SeasonProps = {
  seasons: TSeason[];
  onSelectSeason: (selectedSeason: TSeason) => void;
  selectedSeason: TSeason | null;
};

const Season: React.FC<SeasonProps> = ({ seasons, onSelectSeason, selectedSeason }: SeasonProps) => {
  const handleSeasonClick = (season: TSeason) => {
    onSelectSeason(season);
  };

  return (
    <div className="row">
      <h3>Season 1</h3>
      {seasons.slice(0, 6).map((season) => (
        <div className="col-md-6 mb-3" key={season.id}>
          <button
            className={`${styles.btnSeason} w-100 ${selectedSeason?.id === season.id ? styles.selectedSeason : ''}`}
            onClick={() => handleSeasonClick(season)}
          >
            {season.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Season;
