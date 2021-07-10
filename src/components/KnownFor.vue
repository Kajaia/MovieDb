<template>
  <div class="my-4" v-show="known">
    <h5 class="text-c-light fw-bold">Known for</h5>
    <div class="row">
      <div
        class="col-6 col-md-3 my-2"
        v-for="movie in known.slice(0, 4)"
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
            height="240"
            class="w-100 cover rounded-3 shadow"
            :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
            :alt="movie.title"
            loading="lazy"
          />
          <img
            v-else
            height="240"
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
</template>

<script>
import APIServices from "../services/APIServices";
export default {
  name: "KnownFor",
  props: {
    id: String,
  },
  data() {
    return {
      known: [],
    };
  },
  created() {
    APIServices.getPersonKnownFor(this.id)
      .then((response) => {
        this.known = response.data.cast;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
