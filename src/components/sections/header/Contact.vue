<template>
  <section>
    <div class="container">
      <div class="left-box">
        <font-awesome-icon :icon="['fa', 'clock']" />
        <span>Open Hours: Mon. - Sat. | 9:00 - 18:00</span>
      </div>
      <div class="right-box">
        <div>
          <font-awesome-icon :icon="['fa', 'phone']" />
          <a href="#">+1(305) 1234-5678</a>
        </div>
        <div>
          <font-awesome-icon :icon="['fa', 'envelope']" />
          <a href="#">hello@example.com</a>
        </div>
        <div class="socials">
          <font-awesome-icon :icon="['fab', 'facebook-f']"/>
          <font-awesome-icon :icon="['fab', 'twitter']"/>
          <font-awesome-icon :icon="['fab', 'linkedin-in']"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style lang="scss" scoped>
// import variables
@import './../../../assets/global/global-variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap');

  section {
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;

    background-color: $smalt;
    color: $silver;

    .container {
      width: 75%;
      
      display: flex;
      justify-content: space-between;

      margin: 0 auto;
      padding: .8rem 2rem;

      .right-box {
        width: 45%;

        display: flex;
        justify-content: space-between;

        .socials svg {
          margin: 0 1rem;
        }

        a {
          color: $silver;
        }
      }
    }

    svg {
      margin: 0 .3rem 0 .5rem;
    }
  }

</style>