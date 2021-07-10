<template>
  <div class="my-4">
    <h2 class="title-decoration">Popular movies</h2>
    <div class="row">
      <div class="movie-scroller">
        <div
          class="col-6 col-md-3 col-lg-2 my-2 mx-2"
          v-for="movie in popularMovies"
          :key="movie.id"
        >
          <div class="card border-0 rounded-3 bg-transparent">
            <span
              class="badge bg-success rounded-pill shadow position-absolute m-2"
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
              "
              v-else-if="movie.vote_average < 8 && movie.vote_average >= 5"
            >
              {{ movie.vote_average * 10 + "%" }}
            </span>
            <span
              class="badge bg-danger rounded-pill shadow position-absolute m-2"
              v-else
            >
              {{ movie.vote_average * 10 + "%" }}
            </span>
            <img
              v-if="movie.poster_path"
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
                <router-link
                  class="title-link stretched-link"
                  :to="{ name: 'Movie', params: { id: movie.id } }"
                >
                  {{ movie.title }}
                </router-link>
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
import APIServices from "../services/APIServices.js";

export default {
  name: "PopularMovies",
  data() {
    return {
      popularMovies: [],
    };
  },
  created() {
    APIServices.getPopularMovies()
      .then((response) => {
        this.popularMovies = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
