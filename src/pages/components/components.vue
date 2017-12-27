<template>
  <div class="component">
    <m-header></m-header>
    <sideNav @fadeIn="fadeIn" @fadeOut="fadeOut"></sideNav>
    <back2-top ref="backTop"></back2-top>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/header/header'
  import sideNav from 'components/sideNav/side-nav'
  import back2Top from 'components/back2Top/back2Top'

  export default {
    methods: {
      fadeIn () {
        this.$refs.backTop.show()
      },
      fadeOut () {
        this.$refs.backTop.hide()
      }
    },
    components: {
      MHeader,
      sideNav,
      back2Top
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .component
    width 100%
    height 100%
</style>
