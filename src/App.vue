<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

// 00000000 SCRIPT
<script>
// import
import Header from "./components/macro/Header.vue";
import Main from "./components/macro/Main.vue";
import Footer from "./components/macro/Footer.vue";

// export
export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

// 000000000 STYLE 
<style lang="scss">
@import "./assets/global/global-variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap");

// commons
* {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;

  margin: 0;
  padding: 0;

  &::selection {
    background-color: $mark;
  }
}

section.padding {
  padding: 6.8rem 0;
}

h2 {
  font-size: 2.4rem;
  color: $wood;

  margin: 1rem 0 1.4rem;
}

h5 {
  text-transform: uppercase;
  color: $fountain;
}

a {
  text-decoration: none;
}

svg {
  cursor: pointer;
}

span.marked {
  color: $lagoon;
  background-color: $mark;

  padding: 0 .6rem;
  border-radius: 4px;
}

p.paragraph {
  line-height: 1.4rem;
  font-size: 1rem;

  color: $silver;
}

button {
  cursor: pointer;

  font-family: "Montserrat", sans-serif;
  font-weight: 500;

  padding: 1em 1.4em;
  border-radius: 2px;
  border: none;

  &.lagoon {
    background-color: $lagoon;
    color: $white;

    border: 1px solid transparent;
    border-radius: 2px;

    transition: background-color 0.2s linear;

    &:hover {
      background-color: $surfe;
    }
  }

  &.border {
    background-color: transparent;
    color: $white;

    border: 1px solid $lagoon;

    transition: background-color 0.2s linear;

    &:hover {
      background-color: $lagoon;
    }
  }
}
</style>
