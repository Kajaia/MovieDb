<template>
  <div class="my-4">
    <h2 class="title-decoration">Popular TV Shows</h2>
    <div class="row">
      <div
        class="col-6 col-md-3 col-lg-2 my-2"
        v-for="show in tv"
        :key="show.id"
      >
        <div class="card border-0 rounded-3 bg-transparent">
          <span
            class="badge bg-success rounded-pill shadow position-absolute m-2"
            v-if="show.vote_average >= 8"
          >
            {{ show.vote_average * 10 + "%" }}
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
            v-else-if="show.vote_average < 8 && show.vote_average >= 5"
          >
            {{ show.vote_average * 10 + "%" }}
          </span>
          <span
            class="badge bg-danger rounded-pill shadow position-absolute m-2"
            v-else
          >
            {{ show.vote_average * 10 + "%" }}
          </span>
          <img
            v-if="show.poster_path"
            height="240"
            class="w-100 cover rounded-3 shadow"
            :src="'https://image.tmdb.org/t/p/w500' + show.poster_path"
            :alt="show.name"
            loading="lazy"
          />
          <img
            v-else
            height="240"
            class="w-100 cover rounded-3 shadow"
            :src="
              'https://ui-avatars.com/api/?uppercase=true&bold=true&background=random&size=512&name=' +
              show.name
            "
            :alt="show.name"
            loading="lazy"
          />
          <div class="card-body text-wrap">
            <h6 class="fw-bold mb-1">
              <a class="title-link stretched-link" :href="'/show/' + show.id">
                {{ show.name }}
              </a>
            </h6>
            <p class="mb-0 lh-1" v-show="show.first_air_date">
              <small class="text-muted">
                {{ show.first_air_date }}
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
  name: "Tv",
  data() {
    return {
      tv: [],
    };
  },
  created() {
    APIServices.getPopularTv()
      .then((response) => {
        this.tv = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
