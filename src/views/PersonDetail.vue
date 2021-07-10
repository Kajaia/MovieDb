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
      <div class="mt-3 d-none d-md-block">
        <h5 class="text-c-light fw-bold">Personal info</h5>
        <div class="mt-2" v-show="person.known_for_department">
          <h6 class="text-c-light fw-bold">Known for</h6>
          <p class="mb-0 text-c-light">
            {{ person.known_for_department }}
          </p>
        </div>
        <div class="mt-2" v-show="person.birthday">
          <h6 class="text-c-light fw-bold">Birthday</h6>
          <p class="mb-0 text-c-light">
            {{ person.birthday }}
          </p>
        </div>
        <div class="mt-2" v-show="person.place_of_birth">
          <h6 class="text-c-light fw-bold">Place of birth</h6>
          <p class="mb-0 text-c-light">
            {{ person.place_of_birth }}
          </p>
        </div>
        <div class="mt-2" v-show="person.also_known_as">
          <h6 class="text-c-light fw-bold">Also known as</h6>
          <p class="mb-0 text-c-light">
            {{ person.also_known_as }}
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-8 my-2">
      <h1 class="text-c-light fw-bold">
        {{ person.name }}
      </h1>
      <div class="mt-3 d-sm-block d-md-none">
        <h5 class="text-c-light fw-bold">Personal info</h5>
        <div class="mt-2" v-show="person.known_for_department">
          <h6 class="text-c-light fw-bold">Known for</h6>
          <p class="mb-0 text-c-light">
            {{ person.known_for_department }}
          </p>
        </div>
        <div class="mt-2" v-show="person.birthday">
          <h6 class="text-c-light fw-bold">Birthday</h6>
          <p class="mb-0 text-c-light">
            {{ person.birthday }}
          </p>
        </div>
        <div class="mt-2" v-show="person.place_of_birth">
          <h6 class="text-c-light fw-bold">Place of birth</h6>
          <p class="mb-0 text-c-light">
            {{ person.place_of_birth }}
          </p>
        </div>
        <div class="mt-2" v-show="person.also_known_as">
          <h6 class="text-c-light fw-bold">Also known as</h6>
          <p class="mb-0 text-c-light">
            {{ person.also_known_as }}
          </p>
        </div>
      </div>
      <div class="mt-3" v-show="person.biography">
        <h5 class="text-c-light fw-bold">Biography</h5>
        <p class="mb-0 text-c-light">
          {{ person.biography }}
        </p>
      </div>
      <KnownForActing
        v-show="person.known_for_department == 'Acting'"
        :id="id"
      />
      <KnownForProduction
        v-show="person.known_for_department == 'Production'"
        :id="id"
      />
    </div>
    <PersonCast :id="id" />
    <PersonCrew :id="id" />
  </div>
</template>

<script>
import APIServices from "../services/APIServices";
import KnownForActing from "../components/KnownForActing.vue";
import KnownForProduction from "../components/KnownForProduction.vue";
import PersonCast from "../components/PersonCast.vue";
import PersonCrew from "../components/PersonCrew.vue";

export default {
  name: "PersonDetail",
  props: {
    id: String,
  },
  components: {
    KnownForActing,
    KnownForProduction,
    PersonCast,
    PersonCrew,
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
