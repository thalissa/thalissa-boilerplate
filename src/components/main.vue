<template lang="pug">
  body
    .header
      .mainLink
        router-link(to="/") Hello World!
    .view
      router-view
</template>

<style lang="stylus">
  html
    width 100%
    height 100%
    background #212121
    color #f5f5f5

  a, a:visited
    color #1bc4f2
    cursor pointer
    text-decoration underline

  a:hover
    color #94e8ff

  .app
    display flex

  .view
    flex-grow 1

  .mainLink a, .link a
    border-radius 10px
    background #707070
    padding 5px

  .header
    display flex
    flex-direction row
    justify-content center

  .header .link, .header .mainLink
    align-self baseline
    margin-left 5px
    margin-right 5px

  .header .mainLink
    font-size 18pt
</style>

<script>
  export default {
      props: [ ]
  };
</script>
