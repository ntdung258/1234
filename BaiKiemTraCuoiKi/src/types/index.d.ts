export type TGenre = {
  id: number;
  name: string;
};

export type TMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TMovieDetail = {
  adult: boolean;
  poster_path: string;
  genres: {
    id: number;
    name: string;
  };
  id: number;
  original_title: string;
  overview: string;
  title: string;
  vote_average: number;
  video: boolean;
  release_date: string;
  production_countries:{
    id:number;
    name: string;
  }
  production_companies: {
    id:number;
    name: string;
  }
};

export type TSeason = {
  id: number;
  name: string;
  key: string;
};

export type TComment = {
  author: string;
  author_details: {
        name: string,
        username: string,
        avatar_path: string,
        rating: number
      };
  content: string;
  created_at: string;    
};

