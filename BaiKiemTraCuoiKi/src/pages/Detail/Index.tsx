import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { createAPIService } from '../../servies/createAPIService';
import { TMovieDetail, TSeason, TComment } from '../../types';
import { Container, ProgressBar } from 'react-bootstrap';
import Layout from '../../components/templates/Layout/Layout';
import YouMayAlsoLike from '../../components/organisms/Detail/YouMayAlsoLike';
import Detail from '../../components/organisms/Detail/DetailMovie';
import Season from '../../components/organisms/Detail/Season';
import Comments from '../../components/organisms/Detail/Comment';
import PlayMovie from '../../components/organisms/Detail/PlayMovie';

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movieDetail, setMovieDetail] = useState<TMovieDetail | null>(null);
  const [errors, setErrors] = useState({});
  const [youMayAlsoLike, setYouMayAlsoLike] = useState<TMovieDetail[]>([]);
  const [seasonList, setSeasonList] = useState<TSeason[]>([]);
  const [commentList, setCommentList] = useState<TComment[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<TSeason | null>(null);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleApiError = (error: unknown, defaultMessage: string) => {
    if (axios.isAxiosError(error)) {
      setErrors({
        ...errors,
        api: error.message,
      });
    } else {
      setErrors({
        ...errors,
        api: defaultMessage,
      });
    }
  };

  const fetchMovieData = async () => {
    try {
      const [movieResponse, similarResponse, videosResponse, reviewsResponse] = await Promise.all([
        createAPIService.get(`/movie/${id}`),
        createAPIService.get(`/movie/${id}/similar`),
        createAPIService.get(`/movie/${id}/videos`),
        createAPIService.get(`/movie/${id}/reviews`),
      ]);

      setMovieDetail(movieResponse.data);
      setYouMayAlsoLike(similarResponse.data.results);
      setSeasonList(videosResponse.data.results);
      setCommentList(reviewsResponse.data.results);
    } catch (e) {
      handleApiError(e, 'An error occurred while fetching data.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoadingPercentage(25);
      await fetchMovieData();
      setLoadingPercentage(100);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    setSelectedSeason(seasonList[0]);
  }, [seasonList]);

  if (!movieDetail) {
    return (
      <div>
        <ProgressBar animated now={loadingPercentage} label={`${loadingPercentage}%`} />
        Loading...
      </div>
    );
  }

  return (
    <Layout>
      <Container>
        <ProgressBar animated now={loadingPercentage} label={`${loadingPercentage}%`} />
        <PlayMovie season={selectedSeason} />
        <Detail movieDetail={movieDetail} />
        <Season seasons={seasonList} onSelectSeason={setSelectedSeason} selectedSeason={selectedSeason} />
        <YouMayAlsoLike movieDetails={youMayAlsoLike} />
        <Comments comments={commentList} />
      </Container>
    </Layout>
  );
};

export default MovieDetail;
