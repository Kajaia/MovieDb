<template>
  <div class="my-4">
    <h2 class="title-decoration">Popular actors</h2>
    <div class="row">
      <div
        class="col-6 col-md-3 col-lg-2 my-2"
        v-for="person in persons"
        :key="person.id"
      >
        <div class="card border-0 rounded-3 bg-transparent">
          <img
            v-if="person.profile_path"
            height="240"
            class="w-100 cover rounded-3 shadow"
            :src="'https://image.tmdb.org/t/p/w500' + person.profile_path"
            :alt="person.name"
            loading="lazy"
          />
          <img
            v-else
            height="240"
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
              <router-link
                class="title-link stretched-link"
                :to="{ name: 'Person', params: { id: person.id } }"
              >
                {{ person.name }}
              </router-link>
            </h6>
            <p class="mb-0 lh-1" v-show="person.known_for">
              <small class="text-muted">
                <span v-for="known in person.known_for" :key="known.id">
                  {{ known.title }},
                </span>
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
  name: "Persons",
  data() {
    return {
      persons: [],
    };
  },
  created() {
    APIServices.getPopularPersons()
      .then((response) => {
        this.persons = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
