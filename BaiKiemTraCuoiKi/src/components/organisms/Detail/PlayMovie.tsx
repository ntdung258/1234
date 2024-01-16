import React from 'react';
import { TSeason } from '../../../types';

export type PlayMovieProps = {
  season: TSeason | null;
};

const PlayMovie: React.FC<PlayMovieProps> = ({ season }: PlayMovieProps) => {
  if (!season) {
    return <div>No season selected</div>; // You can customize this message
  }

  return (
    <div className="row pt-5">
      <div className="video-responsive">
        <iframe
          style={{ width: '100%', height: '712px' }}
          src={`https://www.youtube.com/embed/` + season.key}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
};

export default PlayMovie;
