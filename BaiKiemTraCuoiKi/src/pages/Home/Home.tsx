import React, { useEffect, useState } from 'react';
import Layout from '../../components/templates/Layout/Layout';
import RecentlyUpdated from '../../components/organisms/RecentlyUpdated/RecentlyUpdated';
import Trending from '../../components/organisms/Trending/Trending';
import Movie from '../../components/organisms/Movie/Movie';
// import Series from '../../components/organisms/Series/Series';
import Recommended from '../../components/organisms/Recommended/Recommended';
import Slider from '../../components/organisms/Slider/Slider';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { TGenre, TMovie } from '../../types';
import { createAPIService } from '../../servies/createAPIService';

const Home: React.FC = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<TMovie[]>([]);
  const [genresMovieList, setGenresMovieList] = useState<TGenre[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<TMovie[]>([]);
  const [trendingWeekMovies, setTrendingWeekMovies] = useState<TMovie[]>([]);
  const [latestMovie, setLatestMovie] = useState<TMovie>({} as TMovie);
  const [topRatedMovies, setTopRatedMovies] = useState<TMovie[]>([]);
  const [errors, setErrors] = useState({});

  const getNowPlayingMovies = async () => {
    try {
      setErrors({
        ...errors,
        nowPlayingMovies: null,
      });
      const response = await createAPIService.get('/movie/now_playing');
      setNowPlayingMovies(response.data.results);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        setErrors({
          ...errors,
          nowPlayingMovies: e.message,
        });
      } else {
        setErrors({
          ...errors,
          nowPlayingMovies: 'An error occurred',
        });
      }
    }
  };

  const getGenresMovieList = async () => {
    try {
      setErrors({
        ...errors,
        genresMovieList: null,
      });
      const response = await createAPIService.get('/genre/movie/list');
      setGenresMovieList(response.data.genres);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        setErrors({
          ...errors,
          genresMovieList: e.message,
        });
      } else {
        setErrors({
          ...errors,
          genresMovieList: 'An error occurred',
        });
      }
    }
  };

  const getUpcomingMovies = async () => {
    try {
      setErrors({
        ...errors,
        upcomingMovies: null,
      });
      const response = await createAPIService.get('/movie/upcoming');
      setUpcomingMovies(response.data.results);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        setErrors({
          ...errors,
          upcomingMovies: e.message,
        });
      } else {
        setErrors({
          ...errors,
          upcomingMovies: 'An error occurred',
        });
      }
    }
  };

  const getTrendingMovieWeek = async () => {
    try {
      setErrors({
        ...errors,
        trendingWeekMovies: null,
      });
      const response = await createAPIService.get('/trending/movie/week');
      setTrendingWeekMovies(response.data.results);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        setErrors({
          ...errors,
          trendingWeekMovies: e.message,
        });
      } else {
        setErrors({
          ...errors,
          trendingWeekMovies: 'An error occurred',
        });
      }
    }
  };

  const getLatestMovie = async () => {
    try {
      setErrors({
        ...errors,
        latestMovie: null,
      });
      const response = await createAPIService.get('/movie/latest');
      setLatestMovie(response.data);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        setErrors({
          ...errors,
          latestMovie: e.message,
        });
      } else {
        setErrors({
          ...errors,
          latestMovie: 'An error occurred',
        });
      }
    }
  };

  const getTopRatedMovies = async () => {
    try {
      setErrors({
        ...errors,
        topRatedMovies: null,
      });
      const response = await createAPIService.get('/movie/top_rated');
      setTopRatedMovies(response.data.results);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        setErrors({
          ...errors,
          topRatedMovies: e.message,
        });
      } else {
        setErrors({
          ...errors,
          topRatedMovies: 'An error occurred',
        });
      }
    }
  };

  useEffect(() => {
    getGenresMovieList();
    getNowPlayingMovies();
    getUpcomingMovies();
    getTrendingMovieWeek();
    getLatestMovie();
    getTopRatedMovies();
  }, []); // eslint-disable-line

  return (
    <Layout>
      <Slider genres={genresMovieList} movies={nowPlayingMovies} />
      <Container>
        <RecentlyUpdated movies={upcomingMovies} />
        <Trending movies={trendingWeekMovies} genres={genresMovieList} />
        <Movie movie={latestMovie} />
        {/* <Series /> */}
        <Recommended movies={topRatedMovies} genres={genresMovieList} />
      </Container>
    </Layout>
  );
};

export default Home;
