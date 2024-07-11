<template>
  <div id="app">
    <LandingPage />
  </div>
</template>

<script>
import LandingPage from "./components/LandingPage.vue";

export default {
  name: "App",
  components: {
    LandingPage,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Sacramento&display=swap");

:root {
  --naranja: #dc7f22;
  --blanco: #fcf4ec;
  --marron: #724212;
  --marron-claro: #a99170;
  --gris: #b2beb4;
  --negro: #455a5a;
}

* {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  background-color: #f4f4f9;
}

#app {
  text-align: center;
}
</style>
