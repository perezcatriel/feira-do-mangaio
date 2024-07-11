<template>
  <div class="landing-page">
    <header>
      <nav class="navbar">
        <div class="navbar-brand">
          <img src="@/assets/logo solo.png" alt="Feira do Mangaio" />
        </div>
        <div>
          <h2>Feira do Mangaio</h2>
        </div>
        <div class="menu-icon" @click="toggleMenu">
          &#9776;
        </div>
        <div :class="['navbar-menu', { active: menuActive }]">
          <a href="#about" @click="closeMenu">Sobre</a>
          <a href="#dates" @click="closeMenu">Fechas</a>
          <a href="#contact" @click="closeMenu">Contato</a>
        </div>
      </nav>
    </header>
    <section class="hero">
      <div class="hero-content">
        <h1>Feira do Mangaio</h1>
        <p class="hero-content--slogan">Moda, Arte, Decoração e Quitutes</p>
        <p>Esperamos por você!</p>
        <p>Sábado 13</p>
        <p>17:00 - 22:00</p>
      </div>
    </section>
    <section id="about">
      <div class="about-content">
        <h2>Sobre a Feira</h2>
        <p>
          A Feira do Mangaio é um evento para todos que apreciam a cultura
          local, moda, arte e gastronomia.
        </p>
      </div>
    </section>
    <section id="dates">
      <div class="dates-content">
        <h2>Próximas Feiras</h2>
        <ul>
          <li>13/07 - Praça Principal de Jeri</li>
          <li>20/07 - Praça Principal de Jeri</li>
          <li>27/07 - Gabiroba do Preá</li>
        </ul>
      </div>
    </section>
    <section id="contact">
      <div class="contact-content">
        <h2>Contato</h2>
        <p>
          <a href="https://instagram.com/feiradomangaio_jeri" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </p>
      </div>
    </section>
    <footer>
      <p>© 2019 Feira do Mangaio</p>
      <p>Made by <strong><a href="http://datacraft.vercel.app" target="_blank" rel="noopener noreferrer">DataCraft</a></strong></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    closeMenu() {
      this.menuActive = false;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Sacramento&display=swap');

:root {
  --negro: #000000;
  --blanco: #ffffff;
  --gris: #cccccc;
}

.landing-page {
  font-family: "Julius Sans One", Impact, Haettenschweiler, "Arial Narrow Bold",
    sans-serif;
  color: var(--negro);
  background-color: var(--blanco);
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--blanco);
  align-items: center;
}

.navbar-brand img {
  height: 50px;
}

.navbar-menu a {
  margin: 0 15px;
  color: var(--negro);
  text-decoration: none;
}

.menu-icon {
  display: none;
  cursor: pointer;
  font-size: 2em;
}

.hero {
  text-align: center;
  padding: 100px 20px;
  background: url("@/assets/photos/feira.jpg") no-repeat center center;
  background-size: cover;
  color: var(--blanco);
  text-shadow: 2px 2px 2px var(--negro);
}

.hero-content h1 {
  font-size: 3em;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.hero-content--slogan {
  font-family: "Sacramento", cursive;
  margin-top: -15px;
  font-size: 2.5em;
  font-weight: normal;
}

section {
  padding: 60px 20px;
}

.about-content,
.dates-content,
.contact-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.dates-content ul {
  padding: 0;
}

.dates-content li {
  list-style: none;
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 10px;
}

.contact-content a {
  font-size: 5rem;
  color: var(--gris);
}

footer {
  text-align: center;
  padding: 20px;
  background-color: var(--gris);
  color: var(--negro);
}

footer a {
  color: var(--blanco);
  text-decoration: none;
}

/* Estilos para móviles */
@media (max-width: 768px) {
  .menu-icon {
    display: block;
  }

  .navbar-menu {
    display: none;
    flex-direction: column;
    align-items: center;
    background-color: var(--blanco);
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
  }

  .navbar-menu.active {
    display: flex;
  }

  .navbar-menu a {
    padding: 10px 0;
    width: 100%;
    text-align: center;
  }
}
</style>
