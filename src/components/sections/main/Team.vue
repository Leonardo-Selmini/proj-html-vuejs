<template>
  <section class="padding">
    <div class="left-box">
      <h5>we like what we do</h5>
      <h2><span class="marked">Team</span> of Experts</h2>
      <p class="paragraph">Ethics and integrity are the basic on which our professionals build their careers. They are fundamentals that become daily attitudes.</p>
      <div class="container">
        <div class="item">
          <img src="./../../../assets/images/team-1.jpg" alt="David Cooper Pic">
          <div class="text">
            <h3>David Cooper</h3>
            <span class="grey">cto & co-founder</span>
            <div class="icons">
              <div class="circle">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </div>
              <div class="circle">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </div>
              <div class="circle">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <img src="./../../../assets/images/team-4.jpg" alt="Oliver Jones Pic">
          <div class="text">
            <h3>Olive Jones</h3>
            <span class="grey">chief procurement</span>
            <div class="icons">
              <div class="circle">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </div>
              <div class="circle">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </div>
              <div class="circle">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <img src="./../../../assets/images/team-2.jpg" alt="Emma Lopez Pic">
          <div class="text">
            <h3>Emma Lopez</h3>
            <span class="grey">chief marketing</span>
            <div class="icons">
              <div class="circle">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </div>
              <div class="circle">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </div>
              <div class="circle">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <img src="./../../../assets/images/team-3.jpg" alt="T. Johnson Pic">
          <div class="text">
            <h3>T. Johnson</h3>
            <span class="grey">ceo & president</span>
            <div class="icons">
              <div class="circle">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </div>
              <div class="circle">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </div>
              <div class="circle">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-box">
      <h3>President Speech</h3>
      <p class="section">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quam animi autem hic praesentium dicta.</p>
      <p class="section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti facere aut, voluptate nesciunt nobis. Amet mollitia fugiat consectetur eum culpa, similique vitae. Aut, non.</p>
      <p class="section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque soluta earum, neque saepe dolorem?</p>
      <div class="end">
        <h4>T. Johnson</h4>
        <font-awesome-icon :icon="['fas', 'quote-right']" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Team',
}
</script>

<style lang="scss" scoped>
@import './../../../assets/global/global-variables.scss';

section {
  width: 70%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin: 0 auto;

  .left-box {
    width: 60%;

    p.paragraph {
      margin-bottom: 2.6rem;
    }

    .container {
      display: grid;
      grid-template-columns: 50% 50%;
      gap: 1.6rem;

      .item {
        display: flex;

        img {
          height: 6.8rem;

          margin-right: 1.4rem;
          border-radius: 4px;
        }

        .text {
          span {
            color: $silver;

            font-size: .8rem;
            text-transform: uppercase;
          }

          .icons {
            display: flex;

            margin-top: .6rem;
          }
        }
      }
    }
  }

  .right-box {
    width: 30%;

    background-color: $lagoon;
    color: $white;

    padding: 2rem;
    border-radius: 4px;

    .section {
      font-size: .8rem;

      color: $white;
      opacity: .6;

      margin: 1rem 0;
    }

    .end {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      svg {
        font-size: 1.4rem;
        
        color: $surfe;
      }
    }
  }
}
</style>