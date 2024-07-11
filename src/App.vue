<template>
  <div id="app">
    <LandingPage />
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue';

export default {
  name: 'App',
  components: {
    LandingPage
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Sacramento&display=swap');

:root {
  --naranja: #DC7F22;
  --blanco: #FCF4EC;
  --marron: #724212;
  --marron-claro: #A99170;
  --gris: #B2BEB4;
  --negro: #455A5A;
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f4f4f9;
}

#app {
  text-align: center;
}
</style>
