<template>
  <section class="padding">
    <div class="container">
      <div class="contacts">
        <img src="./../../../assets/images/nexgen-logo.svg" alt="NexGen Logo" />
        <p class="paragraph">
          A Functional HTML Template for Corporate & Business.
        </p>
        <div class="item">
          <font-awesome-icon :icon="['fa', 'phone']" />
          <span>+1(305)1234-5678</span>
        </div>
        <div class="item">
          <font-awesome-icon :icon="['fa', 'envelope']" />
          <span>hello@example.com</span>
        </div>
        <div class="item">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
          <span>Main Avenue, 987</span>
        </div>
        <button class="border">GET IN TOUCH</button>
      </div>
      <div class="column" v-for="(col, index) in GlobalData.footer" :key="index">
        <h3>{{col.name}}</h3>
        <ul>
          <li v-for="(link, i) in GlobalData.footer[index].links" :key="i">
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
            <a href="#">{{link}}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
// import
import GlobalData from "./../../../assets/global/global-data";

// export
export default {
  name: "Link",
  data() {
    return {
      GlobalData,
    };
  },
};
</script>

<style lang="scss" scoped>
@import './../../../assets/global/global-variables.scss';

section {
position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;

    background-image: url('./../../../assets/images/bg-1.jpg');
    background-size: cover;
    background-position-y: -6rem;
    background-repeat: no-repeat;
    filter: brightness(0.6);
  }

  .container {
    position: relative;
    width: 70%;

    display: grid;
    grid-template-columns: 22% 22% 22% 22%;
    column-gap: 3%;

    margin: 0 auto;

    .contacts {
      img {
        height: 3rem;

        cursor: pointer;
      }

      p.paragraph {
        margin: 1rem 0;
      }

      .item {
        color: $silver;
        margin: .6rem;

        svg {
          margin-right: .6rem;
        }
      }

      button {
        color: $lagoon;
        margin-top: 1rem;

        &:hover {
          color: $white;
        }
      }
    }

    .column {
      background-color: $cape;
      
      padding: 1rem;
      border-radius: 8px;

      transition: background-color .2s linear;

      &:hover {
        background-color: $capePlus;
      }

      h3 {
        color: $white;

        margin-bottom: .6rem;
      }

      li {
        line-height: 2.4rem;

        list-style: none;

        svg {
          color: $silver;
        }

        a {
          color: $silver;

          margin-left: .6rem;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>