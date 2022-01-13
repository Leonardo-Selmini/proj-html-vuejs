<template>
  <footer>
    <NewsLetter/>
    <Form/>
    <Link/>
    <Closure/>
  </footer>
</template>

// 00000000 SCRIPT
<script>
  // import
  import NewsLetter from './../sections/footer/NewsLetter.vue';
  import Form from './../sections/footer/Form.vue';
  import Link from './../sections/footer/Link.vue';
  import Closure from './../sections/footer/Closure.vue';

  // export
  export default {
    name: 'Footer',
    components: {
      NewsLetter,
      Form,
      Link,
      Closure
    }
  }
</script>