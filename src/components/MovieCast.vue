<template>
  <div class="my-4">
    <h2 class="title-decoration">Cast</h2>
    <div class="row">
      <div class="movie-scroller">
        <div
          class="col-6 col-md-3 col-lg-2 my-2 mx-2"
          v-for="person in cast.slice(0, 20)"
          :key="person.id"
        >
          <div class="card border-0 rounded-3 bg-transparent">
            <img
              v-if="person.profile_path != null"
              height="280"
              class="w-100 cover rounded-3 shadow"
              :src="'https://image.tmdb.org/t/p/w500' + person.profile_path"
              :alt="person.name"
              loading="lazy"
            />
            <img
              v-else
              height="280"
              class="w-100 cover rounded-3 shadow"
              :src="
                'https://ui-avatars.com/api/?uppercase=true&bold=true&background=random&size=512&name=' +
                person.name
              "
              :alt="person.name"
              loading="lazy"
            />
            <div class="card-body text-wrap">
              <h6 class="fw-bold mb-1">
                <a class="title-link stretched-link" href="#!">
                  {{ person.name }}
                </a>
              </h6>
              <p class="mb-0 lh-1">
                <small class="text-muted">
                  {{ person.character }}
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
  name: "MovieCast",
  props: {
    id: String,
  },
  data() {
    return {
      cast: [],
    };
  },
  created() {
    APIServices.getMovieCredits(this.id)
      .then((response) => {
        this.cast = response.data.cast;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
