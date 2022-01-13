<template>
  <section>
    <div class="container">
      <p class="paragraph">Enjoy the low price. We are tracking any intention of privacy.</p>
      <p class="paragraph">© 2020 NEXGEN is Proudly Powered by <span>Leonardo Selmini</span></p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Closure'
}
</script>

<style lang="scss" scoped>
@import './../../../assets/global/global-variables.scss';

  section { 
    background-color: $wood;

    .container {
      width: 70%;

      display: flex;
      justify-content: space-between;

      margin: 0 auto;
      padding: 1.5rem 0;

      p {
        font-size: .8rem;

        span {
          color: $lagoon;

          &:hover {
            cursor: pointer;
            
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>