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
        <div class="menu-icon" @click="toggleMenu">&#9776;</div>
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
        <a
          href="https://instagram.com/feiradomangaio_jeri"
          target="_blank"
          class="instagram-button"
          >Visite nosso Instagram</a
        >
      </div>
    </section>
    <section id="about">
      <div class="about-content">
        <h2>Sobre a Feira</h2>
        <p>
          A feira mangaio é um projeto independente, gerido por artistas,
          designers e artesãs que procura promover um espaço de arte e design
          autoral e consciente, que nos permita fortalecer a economia circular,
          inspirando-nos num presente coletivo.
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
      <p>
        Made by
        <strong
          ><a
            href="http://datacraft.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            >DataCraft</a
          ></strong
        >
      </p>
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
.landing-page {
  font-family: "Julius Sans One", Impact, Haettenschweiler, "Arial Narrow Bold",
    sans-serif;
  color: var(--negro);
  background-color: var(--blanco);
}

header {
  position: sticky;
  top: -20px;
  z-index: 100;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--blanco);
  align-items: center;
}

.navbar h2 {
  color: var(--naranja);
  text-shadow: 1px 2px 1px var(--marron-claro);
}

.navbar-brand img {
  height: 50px;
}

.navbar-menu a {
  margin: 0 15px;
  color: var(--negro);
  text-decoration: none;
}

.navbar-menu a:hover {
  color: var(--naranja);
  font-weight: bold;
}

.menu-icon {
  display: none;
  cursor: pointer;
  font-size: 2em;
  color: var(--gris);
}

.hero {
  text-align: center;
  padding: 100px 20px;
  background: url("@/assets/photos/feira.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
  color: var(--blanco);
  text-shadow: 2px 2px 2px var(--marron);
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-content h1 {
  font-size: 4em;
  margin-bottom: 20px;
  text-shadow: 2px 3px 5px var(--naranja);
}

.hero-content p {
  font-size: 3em;
  margin-bottom: 10px;
  text-shadow: 1px 1px 5px var(--naranja);
}

.hero-content--slogan {
  font-family: "Sacramento", cursive;
  margin-top: -15px;
  font-size: 2.5em;
  font-weight: normal;
}

.instagram-button {
  display: inline-block;
  margin-top: 100px;
  padding: 10px 20px;
  background-color: var(--naranja);
  color: var(--blanco);
  text-shadow: 1px 1px 1px var(--marron-claro);
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.instagram-button:hover {
  background-color: var(--marron);
}

.instagram-button a {
  margin-top: 510px !important;
}

section {
  padding: 50px 20px 0;
}

.about-content,
.dates-content,
.contact-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.5em;
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
  color: var(--naranja);
}

.contact-content a:hover {
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

footer a:hover {
  color: var(--naranja);
  font-weight: bold;
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
    z-index: 10;
    margin-top: 20px;
  }

  .navbar-menu a {
    padding: 10px 0;
    width: 100%;
    text-align: center;
  }

  h1,
  .hero-content p {
    font-size: 2em !important;
  }

  .about-content,
  .dates-content,
  .contact-content {
    font-size: 1em;
  }
}
</style>
