import React from 'react';
import TrendingCard from '../../molecules/TrendingCard/TrendingCard';
import { TMovieDetail } from '../../../types';
import { Link } from 'react-router-dom';
import styles from './Detail.module.scss';

export type DetailMovie = {
    movieDetail: TMovieDetail;
};

const DetailMovie: React.FC<DetailMovie> = ({ movieDetail }: DetailMovie) => {
    const genresArray = Array.isArray(movieDetail.genres) ? movieDetail.genres : [];
    const countryArray = Array.isArray(movieDetail.production_countries) ? movieDetail.production_countries : [];
    const companyArray = Array.isArray(movieDetail.production_companies) ? movieDetail.production_companies : [];
    return (
        <section className='pt-5 pb-3'>
            <div className='mt-4 row justify-content-between'>
                <div key={movieDetail.id} className='col-md-4 mb-4 mb-md-0'>
                    <Link to={`/movie/${movieDetail.id}`} key={movieDetail.id}>
                        <TrendingCard
                            name=''
                            imageUrl={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                            star={movieDetail.vote_average}
                            isPlayed={movieDetail.video}
                        />
                    </Link>
                </div>
                <div key={movieDetail.id} className='col-md-8 mb-4 mb-md-0'>
                    <div className="row mb-5">
                        <div className="col-md-9">
                            <h3>{movieDetail.title}</h3>
                        </div>
                        <div className="col-md-3">
                            <button className={`${styles.btnAddFavourite}`}>Add to Favourite</button>
                        </div>
                    </div>
                    
                    <div className='mb-5 mt-5'>
                        {genresArray.map((genre) => (
                            <button className={`${styles.btnGenre}`}>{genre.name}</button> 
                        ))}
                    </div>

                    <div className='mb-5 mt-5'>
                        <span>{movieDetail.overview}</span>
                    </div>

                    <table className='table mb-4'>
                        <tbody>
                            <tr>
                                <td className="fw-bold text-end">Country : </td>
                                <td>
                                    {countryArray.map((country, index) => (
                                        <span>
                                            {country.name}
                                            {index < companyArray.length - 1 && ', '}
                                        </span>
                                    ))}
                                </td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-end">Genre : </td>
                                <td>
                                    {genresArray.map((genre, index) => (
                                        <span>
                                            {genre.name}
                                            {index < companyArray.length - 1 && ', '}
                                        </span>
                                    ))}
                                </td>
                            </tr>
                            <tr>
                                <td className="fw-bold text-end">Date Release : </td>
                                <td>
                                    <span>{movieDetail.release_date}</span>
                                </td>
                            </tr>

                            <tr>
                                <td className="fw-bold text-end">Production : </td>
                                <td>
                                    {companyArray.map((company, index) => (
                                        <span>
                                            {company.name}
                                            {index < companyArray.length - 1 && ', '}
                                        </span>
                                    ))}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default DetailMovie;
