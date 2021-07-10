<template>
  <div class="row">
    <div class="col-md-4 my-2">
      <span
        class="
          badge
          bg-success
          rounded-pill
          shadow
          position-absolute
          m-2
          py-2
          px-3
        "
        v-if="movie.vote_average >= 8"
      >
        {{ movie.vote_average * 10 + "%" }}
      </span>
      <span
        class="
          badge
          bg-warning
          text-dark
          rounded-pill
          shadow
          position-absolute
          m-2
          py-2
          px-3
        "
        v-else-if="movie.vote_average < 8 && movie.vote_average >= 5"
      >
        {{ movie.vote_average * 10 + "%" }}
      </span>
      <span
        class="
          badge
          bg-danger
          rounded-pill
          shadow
          position-absolute
          m-2
          py-2
          px-3
        "
        v-else
      >
        {{ movie.vote_average * 10 + "%" }}
      </span>
      <img
        v-if="movie.poster_path"
        height="540"
        class="w-100 cover rounded-3 shadow"
        :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
        :alt="movie.title"
        loading="lazy"
      />
      <img
        v-else
        height="540"
        class="w-100 cover rounded-3 shadow"
        :src="
          'https://ui-avatars.com/api/?uppercase=true&bold=true&background=random&size=512&name=' +
          movie.title
        "
        :alt="movie.title"
        loading="lazy"
      />
    </div>
    <div class="col-md-8 my-2">
      <h1 class="text-c-light fw-bold">
        {{ movie.title }}
      </h1>
      <p class="mb-0 text-c-light">
        {{ movie.release_date }}
        <span v-show="movie.genres">
          •
          <span v-for="genre in movie.genres" :key="genre.id"
            >{{ genre.name }},
          </span>
        </span>
        <span v-show="movie.runtime"> • {{ movie.runtime }} min</span>
      </p>
      <p class="mt-3 mb-0 text-muted fst-italic" v-show="movie.tagline">
        {{ movie.tagline }}
      </p>
      <div class="mt-3" v-show="movie.overview">
        <h5 class="text-c-light fw-bold">Overview</h5>
        <p class="mb-0 text-c-light">
          {{ movie.overview }}
        </p>
      </div>
      <MovieCrew :id="id" />
    </div>
  </div>
  <MovieCast :id="id" />
  <MovieImages :id="id" />
  <SimilarMovies :id="id" />
</template>

<script>
import APIServices from "../services/APIServices";
import MovieCast from "../components/MovieCast.vue";
import MovieImages from "../components/MovieImages.vue";
import MovieCrew from "../components/MovieCrew.vue";
import SimilarMovies from "../components/SimilarMovies.vue";

export default {
  name: "MovieDetail",
  props: {
    id: String,
  },
  components: {
    MovieCast,
    MovieImages,
    MovieCrew,
    SimilarMovies,
  },
  data() {
    return {
      movie: {},
    };
  },
  created() {
    APIServices.getMovie(this.id)
      .then((response) => {
        this.movie = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
