<template>
  <div class="single-banner p-d-block">
    <img :src="picture" alt="">
    <div class="inner-text">
      <h4>{{ title }}</h4>
    </div>
  </div>
</template>

<script>
  export default {
      props: {
          title: String,
          picture: String
      }
  }

</script>

<style>

</style>
