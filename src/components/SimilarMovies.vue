<template>
  <div class="my-4">
    <h2 class="title-decoration">Similar movies</h2>
    <div class="row">
      <div class="movie-scroller">
        <div
          class="col-6 col-md-3 col-lg-2 my-2 mx-2"
          v-for="movie in movies"
          :key="movie.id"
        >
          <div class="card border-0 rounded-3 bg-transparent">
            <img
              v-if="movie.poster_path != null"
              height="280"
              class="w-100 cover rounded-3 shadow"
              :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
              :alt="movie.title"
              loading="lazy"
            />
            <img
              v-else
              height="280"
              class="w-100 cover rounded-3 shadow"
              :src="
                'https://ui-avatars.com/api/?uppercase=true&bold=true&background=random&size=512&name=' +
                movie.title
              "
              :alt="movie.title"
              loading="lazy"
            />
            <div class="card-body text-wrap">
              <h6 class="fw-bold mb-1">
                <a
                  class="title-link stretched-link"
                  :href="'/movie/' + movie.id"
                >
                  {{ movie.title }}
                </a>
              </h6>
              <p class="mb-0 lh-1">
                <small class="text-muted">
                  {{ movie.release_date }}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import APIServices from "../services/APIServices";
export default {
  name: "SimilarMovies",
  props: {
    id: String,
  },
  data() {
    return {
      movies: [],
    };
  },
  created() {
    APIServices.getSimilarMovies(this.id)
      .then((response) => {
        this.movies = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
