import React from 'react';
import { TSeason } from '../../../types';
import styles from './Detail.module.scss';

export type Season = {
    seasons: TSeason[];
};

const Season: React.FC<Season> = ({ seasons }: Season) => {
    return (
        <div className="row">
            <h3>Season 1</h3>    
            {seasons.slice(0, 6).map((season) => (
                <div className="col-md-6 mb-3">
                    <button className={`${styles.btnSeason} w-100`}>{season.name}</button>
                </div>
            ))}
        </div>
    );
};

export default Season;
