<template>
  <div class="my-4" v-show="images">
    <h2 class="title-decoration">Gallery</h2>
    <div class="row">
      <div
        class="col-6 col-md-4 col-lg-3 my-2"
        v-for="(image, index) in images.slice(0, 8)"
        :key="index"
      >
        <div class="card border-0 rounded-3 bg-transparent">
          <a
            :href="'https://image.tmdb.org/t/p/original' + image.file_path"
            target="blank"
          >
            <img
              class="w-100 rounded-3 shadow"
              :src="'https://image.tmdb.org/t/p/w500' + image.file_path"
              alt="Image"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import APIServices from "../services/APIServices";
export default {
  name: "MovieImages",
  props: {
    id: String,
  },
  data() {
    return {
      images: [],
    };
  },
  created() {
    APIServices.getMovieImages(this.id)
      .then((response) => {
        this.images = response.data.backdrops;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
