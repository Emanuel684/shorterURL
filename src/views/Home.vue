<template>
  <div class="home">
    <div class="p-5 mb-4 bg-light rounded-3" id="banner">
      <h1>Acortar URL</h1>
      <router-link
        :to="{
          name: 'Workshop',
          params: { mod: 'shorten' },
        }"
      >
        <button class="btn btn-lg btn-outline-success">Empezar</button>
      </router-link>
    </div>
    <div class="container">
      <h2>Nuestros servicios</h2>

      <div class="row align-items-md-stretch pt-20">
        <div v-for="mod in mods" :key="mod.name" class="col-md-6">
          <div :class="mod.style">
            <div class="h-100 p-5 rounded-3">
              <h2>{{ mod.name }} URL</h2>
              <p>
                Swap the background-color utility and add a `.text-*` color
                utility to mix up the jumbotron look. Then, mix and match with
                additional component themes and more.
              </p>
              <router-link
                :to="{
                  name: 'Workshop',
                  params: {
                    mod: mod.name.toLowerCase(),
                  },
                }"
              >
                <button :class="mod.btnStyle" type="button">explore...</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Store from "@/assets/store.js";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      mods: Store.functionalities,
    };
  },
  methods: {},
};
</script>

<style scoped>
#banner {
  margin-top: 2.5%;
}
.home {
  margin-bottom: 10%;
}
</style>
