<template>
  <section class="padding">
    <h5>what we are doing</h5>
    <h2><span class="marked">Results</span> in Numbers</h2>
    <div class="box">
      <div class="item">
        <span>128</span>
        <h6>Certification</h6>
      </div>
      <div class="item">
        <span>230</span>
        <h6>Employees</h6>
      </div>
      <div class="item">
        <span>517</span>
        <h6>Customers</h6>
      </div>
      <div class="item">
        <span>94</span>
        <h6>Countries Served</h6>
      </div>
    </div>
  </section>
</template>

<script>
// export
export default {
  name: 'Numbers',
}
</script>

<style lang="scss" scoped>
@import './../../../assets/global/global-variables.scss';

section {
  background-image: url('./../../../assets/images/bg-7.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -10rem;
  
  color: $white;

  h2 {
    color: $white;
  
    .marked {
        color: $white;
    }
  }

  .box {
    width: 80%;

    display: grid;
    grid-template-columns: 25% 25% 25% 25%;

    margin: 5rem auto 0;

    span {
      font-size: 2rem;
      font-weight: 500;

      color: $fountain;
    }

    h6 {
      font-size: 1.2rem;
    }
  }
}

</style>