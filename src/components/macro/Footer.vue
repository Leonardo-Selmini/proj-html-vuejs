<template>
  <footer>
    <NewsLetter/>
    <Form/>
  </footer>
</template>

// 00000000 SCRIPT
<script>
  // import
  import NewsLetter from './../sections/footer/NewsLetter.vue';
  import Form from './../sections/footer/Form.vue';

  // export
  export default {
    name: 'Footer',
    components: {
      NewsLetter,
      Form,
    }
  }
</script>