<template>
  <div class="my-4" v-show="crew">
    <h5 class="text-c-light fw-bold">Crew</h5>
    <div class="row">
      <div
        class="col-6 col-md-4 my-2"
        v-for="person in crew.slice(0, 9)"
        :key="person.id"
      >
        <h6 class="fw-bold mb-1">
          <router-link
            class="title-link"
            :to="{ name: 'Person', params: { id: person.id } }"
          >
            {{ person.name }}
          </router-link>
        </h6>
        <p class="mb-0 lh-1">
          <small class="text-muted">
            {{ person.job }}
          </small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import APIServices from "../services/APIServices";
export default {
  name: "TvCrew",
  props: {
    id: String,
  },
  data() {
    return {
      crew: [],
    };
  },
  created() {
    APIServices.getTvShowCredits(this.id)
      .then((response) => {
        this.crew = response.data.crew;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
