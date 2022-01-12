<template>
  <main>
    <Intro/>
    <Numbers/>
  </main>
</template>

// 00000000 SCRIPT
<script>
// import
import Intro from './../sections/main/Intro.vue';
import Numbers from './../sections/main/Numbers.vue';

// export
export default {
  name: "Main",
  components: {
    Intro,
    Numbers,
  }
};
</script>

// 00000000 STYLE
<style lang="scss" scoped>
</style>