<template>
  <section id="hero">
    <Navbar/>
    <Presentation/>
  </section>
</template>

<script>
// import
import Navbar from './Navbar.vue';
import Presentation from './Presentation.vue';

// export
export default {
  name: 'Hero',
  components: {
    Navbar,
    Presentation
  }
}
</script>

<style lang="scss" scoped>
  #hero {
    position: relative;
    height: 46rem;

    &::before {
      content: "";
      position: absolute;
      inset: 0;

      background-image: url("./../../../../assets/images/bg-2.jpg");
      background-size: 112%;
      background-position-x: -8rem;
      background-repeat: no-repeat;
      filter: brightness(.7);
    }
  }
</style>