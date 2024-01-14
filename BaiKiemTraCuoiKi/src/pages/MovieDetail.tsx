import React, { useEffect, useState } from 'react';
import Layout from '../components/templates/Layout/Layout';
import { useParams } from 'react-router-dom';
import { createAPIService } from '../servies/createAPIService';
import axios from 'axios';
import { TMovieDetail, TSeason, TComment } from '../types';
import { Container } from 'react-bootstrap';
import YouMayAlsoLike from '../components/organisms/Detail/YouMayAlsoLike';
import Detail from '../components/organisms/Detail/Detail';
import Season from '../components/organisms/Detail/Season';
import Comments from '../components/organisms/Detail/Comment';

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movieDetails, setMovieDetails] = useState<TMovieDetail | null>(null);
  const [errors, setErrors] = useState({});
  const [youMayAlsoLike, setYouMayAlsoLike] = useState<TMovieDetail[]>([]);
  const [seasonList, setSeasonList] = useState<TSeason[]>([]);
  const [commentList, setCommentList] = useState<TComment[]>([]);

  const fetchMovieDetails = async () => {
    try {
      const response = await createAPIService.get(`/movie/${id}`);
      setMovieDetails(response.data);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        setErrors({
          ...errors,
          movieDetails: e.message,
        });
      } else {
        setErrors({
          ...errors,
          movieDetails: 'An error occurred',
        });
      }
    }
  };

  const fetchYouMayAlsoLike = async () => {
    try {
      const response = await createAPIService.get(`/movie/${id}/similar`);
      setYouMayAlsoLike(response.data.results);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        setErrors({
          ...errors,
          youMayAlsoLike: e.message,
        });
      } else {
        setErrors({
          ...errors,
          youMayAlsoLike: 'An error occurred',
        });
      }
    }
  };

  const fetchSeason = async () => {
    try {
      const response = await createAPIService.get(`/movie/${id}/videos`);
      setSeasonList(response.data.results);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        setErrors({
          ...errors,
          seasonList: e.message,
        });
      } else {
        setErrors({
          ...errors,
          seasonList: 'An error occurred',
        });
      }
    }
  };

  const fetchComment = async () => {
    try {
      const response = await createAPIService.get(`/movie/${id}/reviews`);
      setCommentList(response.data.results);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        setErrors({
          ...errors,
          commentList: e.message,
        });
      } else {
        setErrors({
          ...errors,
          commentList: 'An error occurred',
        });
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([fetchMovieDetails(), fetchYouMayAlsoLike(), fetchSeason(), fetchComment()]);
    };

    fetchData();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Container>
        <Detail movieDetail= {movieDetails} />
        <Season seasons = {seasonList} />
        <YouMayAlsoLike movieDetails={youMayAlsoLike} />
        <Comments comments={commentList} />
      </Container>
    </Layout>
  );
};

export default MovieDetail;
