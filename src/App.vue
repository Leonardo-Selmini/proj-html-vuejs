<template>
  <div id="app">

  </div>
</template>

// 00000000 SCRIPT
<script>
  // import
  import GlobalData from './assets/global/global-data';
  import Header from './components/macro/Header.vue';
  import Main from './components/macro/Main.vue';
  import Footer from './components/macro/Footer.vue';


  // export
  export default {
    name: 'App',
    components: {
      Header,
      Main,
      Footer
    },
    data(){
      return {
        GlobalData
      }
    },
  }
</script>

// 000000000 STYLE 
<style lang="scss">
  // import variables
  @import './assets/global/global-variables.scss';

  // commons
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
</style>
