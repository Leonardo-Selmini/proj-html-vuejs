<template>
  <header>
    <Contact />
    <Hero />
  </header>
</template>

// 00000000 SCRIPT
<script>
// import
import Contact from "../sections/header/Contact.vue";
import Hero from "../sections/header/hero/Hero.vue";

// export
export default {
  name: "Header",
  components: {
    Contact,
    Hero,
  },
};
</script>
