<template>
  <section class="padding">
    <div class="container">
      <h5>our editorial content</h5>
      <h2>Latest <span class="marked">News</span></h2>
      <div class="box">
        <p class="paragraph">Every week we publish content about what is best in the business world.</p>
        <button class="lagoon">SEE ALL</button>
      </div>
      <div class="pic-box">
        <div class="item">
          <img src="./../../../assets/images/news-1.jpg" alt="News Photo 1">
          <h3>Increasing creativity is possible for everyone</h3>
        </div>
        <div class="item">
          <img src="./../../../assets/images/news-2.jpg" alt="News Photo 2">
          <h3>Because market search is part of the business plan</h3>
        </div>
        <div class="item">
          <img src="./../../../assets/images/news-3.jpg" alt="News Photo 3">
          <h3>Working from home is now a trend</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// export
export default {
  name: 'News',
}
</script>

<style lang="scss" scoped>
@import './../../../assets/global/global-variables.scss';

section {
  background-color: $nurse;

  .container {
    width: 70%;

    margin: 0 auto;

    .box {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        margin-bottom: 0;
      }
    }

    .pic-box {
      display: grid;
      grid-template-columns: 32% 32% 32%;
      column-gap: 2%;

      margin-top: 3rem;

      .item {
        position: relative;

        &:hover h3 {
          opacity: 0;
        }

        img {
          width: 100%;
          display: block;
  
          border-radius: 8px;
        }

        h3 {
          position: absolute;
          inset: 0;

          font-size: 1.2rem;
          text-align: center;

          background-color: rgba(0, 0, 0, .4);
          color: $white;

          padding: 14rem 2rem 0;
          border-radius: 8px;
          
          transition: opacity .4s linear;
        }
      }
    }
  }
}
</style>