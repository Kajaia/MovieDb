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
  getMovie(id) {
    return apiClient.get("/movie/" + id + apiKey);
  },
  getMovieCredits(id) {
    return apiClient.get("/movie/" + id + "/credits" + apiKey);
  },
  getMovieImages(id) {
    return apiClient.get("/movie/" + id + "/images" + apiKey);
  },
  getSimilarMovies(id) {
    return apiClient.get("/movie/" + id + "/similar" + apiKey);
  },
  getPerson(id) {
    return apiClient.get("/person/" + id + apiKey);
  },
  getPersonKnownFor(id) {
    return apiClient.get("/person/" + id + "/movie_credits" + apiKey);
  },
  getPopularPersons() {
    return apiClient.get("/person/popular" + apiKey);
  },
  getPopularMovies() {
    return apiClient.get("/movie/popular" + apiKey);
  },
  getTopMovies() {
    return apiClient.get("/movie/top_rated" + apiKey);
  },
  getUpcomingMovies() {
    return apiClient.get("/movie/upcoming" + apiKey);
  },
  getPopularTv() {
    return apiClient.get("/tv/popular" + apiKey);
  },
  getTvShow(id) {
    return apiClient.get("/tv/" + id + apiKey);
  },
  getTvShowCredits(id) {
    return apiClient.get("/tv/" + id + "/credits" + apiKey);
  },
};
