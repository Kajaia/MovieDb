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
          py-2
          px-3
        "
        v-else-if="show.vote_average < 8 && show.vote_average >= 5"
      >
        {{ show.vote_average * 10 + "%" }}
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
        {{ show.vote_average * 10 + "%" }}
      </span>
      <img
        v-if="show.poster_path"
        height="540"
        class="w-100 cover rounded-3 shadow"
        :src="'https://image.tmdb.org/t/p/w500' + show.poster_path"
        :alt="show.name"
        loading="lazy"
      />
      <img
        v-else
        height="540"
        class="w-100 cover rounded-3 shadow"
        :src="
          'https://ui-avatars.com/api/?uppercase=true&bold=true&background=random&size=512&name=' +
          show.name
        "
        :alt="show.name"
        loading="lazy"
      />
    </div>
    <div class="col-md-8 my-2">
      <h1 class="text-c-light fw-bold">
        {{ show.name }}
      </h1>
      <p class="mb-0 text-c-light">
        {{ show.first_air_date }}
        <span v-show="show.genres">
          •
          <span v-for="genre in show.genres" :key="genre.id"
            >{{ genre.name }},
          </span>
        </span>
      </p>
      <p class="mt-3 mb-0 text-muted fst-italic" v-show="show.tagline">
        {{ show.tagline }}
      </p>
      <div class="mt-3" v-show="show.overview">
        <h5 class="text-c-light fw-bold">Overview</h5>
        <p class="mb-0 text-c-light">
          {{ show.overview }}
        </p>
      </div>
      <TvCrew :id="id" />
    </div>
    <TvCast :id="id" />
  </div>
</template>

<script>
import APIServices from "../services/APIServices";
import TvCast from "../components/TvCast.vue";
import TvCrew from "../components/TvCrew.vue";

export default {
  name: "TvDetail",
  props: {
    id: String,
  },
  components: {
    TvCast,
    TvCrew,
  },
  data() {
    return {
      show: {},
    };
  },
  created() {
    APIServices.getTvShow(this.id)
      .then((response) => {
        this.show = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
