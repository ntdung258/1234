import MovieCard from '../../molecules/MovieCard/MovieCard';
import styles from './Detail.module.scss';
import { map, slice } from 'lodash';
import { TMovieDetail } from '../../../types';
import { Link } from 'react-router-dom';

export type TYouMayAlsoLike = {
    movieDetails: TMovieDetail[];
};
const YouMayAlsoLike: React.FC<TYouMayAlsoLike> = ({ movieDetails }: TYouMayAlsoLike) => {
  return (
    <section className='recommended pt-5 pb-3'>
      <div className='row justify-content-between align-items-md-start'>
        <div className='col-md-9 col-lg-10 col-7 row'>
          <div className={`col-md-12 ${styles.sectionTitle}`}>You may also like</div>
        </div>
      </div>

      <div className='mt-4 row'>
        {map(slice(movieDetails, 0, 8), function (movie) {
          return (
            <div className='col-6 col-md-6 col-lg-3 mb-2'>
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <MovieCard
                  className='mb-4'
                  name={movie.title}
                  imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default YouMayAlsoLike;
