<template>
  <div class="row">
    <div class="col-md-4 my-2">
      <img
        v-if="person.profile_path"
        height="540"
        class="w-100 cover rounded-3 shadow"
        :src="'https://image.tmdb.org/t/p/w500' + person.profile_path"
        :alt="person.name"
        loading="lazy"
      />
      <img
        v-else
        height="540"
        class="w-100 cover rounded-3 shadow"
        :src="
          'https://ui-avatars.com/api/?uppercase=true&bold=true&background=random&size=512&name=' +
          person.name
        "
        :alt="person.name"
        loading="lazy"
      />
    </div>
    <div class="col-md-8 my-2">
      <h1 class="text-c-light fw-bold">
        {{ person.name }}
      </h1>
      <p class="mb-0 text-c-light">
        {{ person.birthday }}
        <span v-show="person.place_of_birth">
          • {{ person.place_of_birth }}
        </span>
      </p>
      <p class="mt-3 mb-0 text-muted fst-italic" v-show="person.tagline">
        {{ person.tagline }}
      </p>
      <div class="mt-3" v-show="person.biography">
        <h5 class="text-c-light fw-bold">Bio</h5>
        <p class="mb-0 text-c-light">
          {{ person.biography }}
        </p>
      </div>
      <KnownFor :id="id" />
    </div>
  </div>
</template>

<script>
import APIServices from "../services/APIServices";
import KnownFor from "../components/KnownFor.vue";

export default {
  name: "PersonDetail",
  props: {
    id: String,
  },
  components: {
    KnownFor,
  },
  data() {
    return {
      person: {},
    };
  },
  created() {
    APIServices.getPerson(this.id)
      .then((response) => {
        this.person = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
