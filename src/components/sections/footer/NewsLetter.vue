<template>
  <section class="padding">
    <div class="container">
      <div class="left-box">
        <h5>newsletter</h5>
        <h2><span class="marked">Know</span> First</h2>
        <p class="paragraph">Follow closely and receive content about our company and the news of the current market.</p>
      </div>
      <div class="right-box">
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <button class="lagoon">SUBCRIBE</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewsLetter',
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

    .left-box {
      width: 50%;

      h2 {
        color: $white;
  
        span {
          color: $white;
        }
      }
    }

    .right-box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      input {
        width: 25rem;

        background-color: $shark;
        color: $silver;

        margin: .8rem 0;
        padding: .8rem;
        border: none;
        border-radius: 4px;

        &:hover {
          outline: 1px solid $lagoon;
        }

        &:focus {
          outline: 2px solid $fountain;
        }
      }

      button.lagoon {
        margin-top: .8rem;
      }
    }
  }
}
</style>