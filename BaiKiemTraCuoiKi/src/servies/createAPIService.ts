import axios from "axios";

export const createAPIService = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 30000,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWFjNDY4YzEwNTU0NmJmODNlOWVjZmY4YmNiZmUxNiIsInN1YiI6IjY1ODUzZjYzNWNhNzA0NWNmYWY1Nzg4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3LhY8G7IR8bgna5wEslFqo8aESOmBHUPlFPVc6tPKGU',
  },
});
