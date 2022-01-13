<template>
  <section class="padding">
    <div class="box">
      <h5>introduction video</h5>
      <h2>Advisory <span class="marked">Performance</span></h2>
      <p class="paragraph">Financial executiveeed to review their strategies, operating models and capabilities so that their areas can generate sound information for better decision making.</p>
    </div>
    <div class="img-container">
      <img src="./../../../assets/images/video-1.jpg" alt="Video Intro Preview">
      <font-awesome-icon :icon="['fa', 'play']" />
    </div>
  </section>
</template>

<script>
// import


// export
export default {
  name: 'Intro',
}
</script>

<style lang="scss" scoped>
@import './../../../assets/global/global-variables.scss';

section {
  text-align: center;

  .box {
    width: 44%;

    margin: 0 auto;

    p {
      margin-bottom: 2.6rem;
    }
  }

  .img-container {
    position: relative;

    width: fit-content;
    height: 22rem;

    background-color: $lagoon;

    margin: 0 auto;
    border-radius: 4px;

    &:hover img {
      opacity: 1;
    }

    &:hover svg {
      color: $fountain;
    }

    img {
      height: 22rem;

      opacity: .8;

      border-radius: 4px;
    }

    svg {
      position: absolute;
      left: 50%;
      top: 50%;

      font-size: 5rem;

      color: $white;
      opacity: .8;

      transform: translate(-50%,-50%);
      transition: color 0.2s linear;
    }
  }
}


</style>