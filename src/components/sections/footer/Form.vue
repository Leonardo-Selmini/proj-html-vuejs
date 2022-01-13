<template>
  <section class="padding">
    <div class="container">
      <div class="left-box">
        <h5>send a message</h5>
        <h2>Get in <span class="marked">Touch</span></h2>
        <p class="paragraph">We will responde to your message as soon as possible.</p>
        <div class="form">
          <input class="input" type="text" placeholder="Name">
          <input class="input" type="email" placeholder="Email">
          <input class="input" type="tel" placeholder="Phone">
          <select class="input" name="info" placeholder="More Info">
            <option value="1">Surname</option>
            <option value="2">Job</option>
            <option value="3">Nationality</option>
          </select>
          <textarea class="input" name="text" placeholder="Message" cols="30" rows="10"></textarea>
          <button class="lagoon">SEND</button>
        </div>
      </div>
      <div class="right-box">
        <h3>Example Inc.</h3>
        <p class="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p class="paragraph">Voluptatibus quis temporibus veritatis nobis nihil magni laudantium.</p>
        <div class="contacts">
          <div class="item">
            <div class="circle">
              <font-awesome-icon :icon="['fa', 'phone']" />
            </div>
            <span>+1(305)1234-5678</span>
          </div>
          <div class="item">
            <div class="circle">
              <font-awesome-icon :icon="['fa', 'envelope']" />
            </div>
            <span>hello@example.com</span>
          </div>
          <div class="item">
            <div class="circle">
              <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
            </div>
            <span>Main Avenue, 987</span>
          </div>
        </div>
        <button class="border">VIEW MAP</button>
      </div>
    </div>
  </section>
</template>

<script>
// export
export default {
  name: 'Form',
}
</script>

<style lang="scss" scoped>
@import './../../../assets/global/global-variables.scss';

section {
  .container {
    width: 70%;

    display: flex;
    justify-content: space-between;

    margin: 0 auto;

    p.paragraph {
      margin-bottom: 2.6rem;
    }

    .left-box {
      width: 64%;

      .form {
        display: grid;
        grid-template-columns: calc(50% - 1rem) calc(50% - 1rem);
        gap: 1rem;
        grid-template-areas:
        ". ."
        ". ."
        "textarea textarea";

        textarea {
          grid-area: textarea;

          resize: none;
          overflow-y: scroll;
        }

        .input {
          background-color: $salt;
          color: $silver;

          padding: .8rem;
          border: none;
          border-radius: 4px;
          
          &:hover {
            outline: 1px solid $lagoon;
          }

          &:focus {
            outline: 2px solid $lagoon;
          }
        }

        button {
          justify-self: start;
        }
      }
    }

    .right-box {
      width: 32%;

      h3 {
        margin-bottom: 1rem;
      }

      .item {
        display: flex;
        align-items: center;

        margin: 1rem 0;

        span {
          font-size: .1.2rem;
          
          color: $lagoon;

          margin-left: .6rem;
        }
      }

      button {
        color: $lagoon;
        
        margin-top: .5rem;

        &:hover {
          color: $white;
        }
      }
    }
  }
}
</style>