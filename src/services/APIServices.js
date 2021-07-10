import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const apiKey = "?api_key=7580044e2306d04aa11e9d8bc46c01d3";

export default {
  getPopularMovies() {
    return apiClient.get("/movie/popular" + apiKey);
  },
  getTopMovies() {
    return apiClient.get("/movie/top_rated" + apiKey);
  },
  getUpcomingMovies() {
    return apiClient.get("/movie/upcoming" + apiKey);
  },
};