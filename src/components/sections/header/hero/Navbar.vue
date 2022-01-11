<template>
  <nav>
    <img src="./../../../../assets/images/nexgen-logo.svg" alt="NexGen Logo">
    <div class="box">
      <ul>
        <li v-for="(link, index) in GlobalData.header" :key="index">
          <a :href="link.href">{{link.label}}</a>
        </li>
        <li><font-awesome-icon :icon="['fas', 'user']" /></li>
      </ul>
      <button class="lagoon">GET IN TOUCH</button>
    </div>
  </nav>
</template>

<script>
// import
import GlobalData from './../../../../assets/global/global-data';

// export
export default {
  name: 'Navbar',
  data(){
    return {
      GlobalData,
    }
  },
}
</script>

<style lang="scss" scoped>
@import './../../../../assets/global/global-variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap');

  nav {
    // il position relative è per stare sopra il layover che oscura la foto
    position: relative;
    width: 70%;
    height: 5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: 'Montserrat', sans-serif;
    margin: 0 auto;

    img {
      height: 60%;

      filter: brightness(1.8);
      
      cursor: pointer;
    }

    .box {
      display: flex;
      justify-content: flex-end;

      ul {
        width: 30rem;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

        li {
          color: $white;
          list-style: none;

          a {
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
            text-decoration: none;

            color: $white;
          }
        }
      }
    }
  }
</style>