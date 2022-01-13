<template>
  <footer>
    <NewsLetter/>
    <Form/>
    <Link/>
  </footer>
</template>

// 00000000 SCRIPT
<script>
  // import
  import NewsLetter from './../sections/footer/NewsLetter.vue';
  import Form from './../sections/footer/Form.vue';
  import Link from './../sections/footer/Link.vue';

  // export
  export default {
    name: 'Footer',
    components: {
      NewsLetter,
      Form,
      Link
    }
  }
</script>