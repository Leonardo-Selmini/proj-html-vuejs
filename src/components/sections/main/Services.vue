<template>
  <section class="padding">
    <div class="box">
      <h5>our business areas</h5>
      <h2>Exellence in <span class="marked">Services</span></h2>
      <div class="btn-container">
        <p class="paragraph">We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowed professionals. These are some options that you can hire.</p>
        <button class="border">SEE ALL</button>
      </div>
    </div>
    <div class="container">
      <div class="item">
        <div class="icon-container">
          <font-awesome-icon :icon="['fas', 'network-wired']" />
          <font-awesome-icon class="arrow" :icon="['fa', 'arrow-right']" />
        </div>
        <div class="text-container">
          <h3>Audit & Assurance</h3>
          <p class="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="item">
        <div class="icon-container">
          <font-awesome-icon :icon="['fas', 'briefcase']" />
          <font-awesome-icon class="arrow" :icon="['fa', 'arrow-right']" />
        </div>
        <div class="text-container">
          <h3>Financial Advisory</h3>
          <p class="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="item">
        <div class="icon-container">
          <font-awesome-icon :icon="['fas', 'chart-bar']" />
          <font-awesome-icon class="arrow" :icon="['fa', 'arrow-right']" />
        </div>
        <div class="text-container">
          <h3>Analitycs and M&A</h3>
          <p class="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="item">
        <div class="icon-container">
          <font-awesome-icon :icon="['fas', 'plane']" />
          <font-awesome-icon class="arrow" :icon="['fa', 'arrow-right']" />
        </div>
        <div class="text-container">
          <h3>Middle Marketing</h3>
          <p class="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="item">
        <div class="icon-container">
          <font-awesome-icon :icon="['fas', 'globe']" />
          <font-awesome-icon class="arrow" :icon="['fa', 'arrow-right']" />
        </div>
        <div class="text-container">
          <h3>Legal Consulting</h3>
          <p class="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="item">
        <div class="icon-container">
          <font-awesome-icon :icon="['fas', 'inbox']" />
          <font-awesome-icon class="arrow" :icon="['fa', 'arrow-right']" />
        </div>
        <div class="text-container">
          <h3>Regulatory Risk</h3>
          <p class="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// export
export default {

}
</script>

<style lang="scss" scoped>
@import './../../../assets/global/global-variables.scss';

section {
  background-color: $wood;

  .box {
    width: 70%;

    margin: 0 auto;

    h2 {
      color: $white;
  
      .marked {
        color: $white;
      }
    }

    .btn-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 3rem;

      p {
        width: 70%;
        margin-bottom: 0;
      }
    }
  }
  .container {
    width: 70%;

    display: grid;
    grid-template-columns: 32% 32% 32%;
    grid-template-rows: 14rem 14rem;
    column-gap: 2%;
    gap: 1.5rem;

    margin: 0 auto;

    .item {
      background-color: $shark;

      transition: background-color .2s linear;

      padding: 2rem;
      border-radius: 8px;

      &:hover {
        background-color: $mark;
      }

      .icon-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        
        svg {
          color: $lagoon;
          font-size: 2.2rem;

          &.arrow {
            font-size: 1.4rem;
          }
        }
      }

      .text-container {
        width: 80%;

        h3 {
          color: $white;
  
          margin: 1.4rem 0 1rem;
        }

      }
    }
  }
}
</style>