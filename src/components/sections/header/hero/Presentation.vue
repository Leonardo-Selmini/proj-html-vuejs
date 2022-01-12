<template>
  <section>
    <div class="box">
      <h1>Financial Risk</h1>
      <p>
        The right outcomes depend on continuos rigor in governance, models and
        processes across the finance function.
      </p>
      <div class="btn-container">
        <button class="lagoon">GET IN TOUCH</button>
        <button class="border">READ MORE</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Presentation",
};
</script>

<style lang="scss" scoped>
@import "./../../../../assets/global/global-variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;500;700&display=swap");

section {
  position: relative;

  .box {
    width: 50%;

    text-align: center;
    margin: 0 auto;

    h1 {
      font-family: "Spline Sans", sans-serif;
      font-size: 4rem;
      font-weight: bold;

      color: $white;

      margin: 12rem 0 1.4rem;
    }

    p {
      color: $nurse;
      margin-bottom: 1.4rem;
    }

    button {
      margin: 0 0.6rem;
    }
  }
}
</style>