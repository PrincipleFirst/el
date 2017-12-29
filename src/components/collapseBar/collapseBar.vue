<template>
  <div class="demo-block-control" :class="_isFix" @click="sendIndex">
    <i class="el-icon-caret-bottom"
       :class="{'el-icon-caret-top':isExpand===true}"></i><span>{{isExpand === false ? '显示' : '隐藏'}}代码</span>
  </div>
</template>

<script>
  export default {
    props: {
      isExpand: {
        type: Boolean,
        default: false
      },
      isFix: {
        type: Boolean,
        default: false
      },
      index: {
        type: Number,
        default: 0
      }
    },
    computed: {
      _isFix () {
        if (this.isExpand === true && this.isFix === true) {
          return 'is-fixed'
        }
      }
    },
    methods: {
      sendIndex () {
        this.$emit('switcher', this.index)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .demo-block-control
    border-top 1px solid #eaeefb
    height 44px
    box-sizing border-box
    background-color #fff
    border-bottom-left-radius 4px
    border-bottom-right-radius 4px
    text-align center
    margin-top -1px
    color #d3dce6
    cursor pointer
    position relative
    i
      font-size 16px
      line-height 44px
      transition .3s
    > span
      position absolute
      font-size 14px;
      line-height 44px
      transition .3s
      opacity 0
    &:hover
      color #409eff
      background-color #f9fafc
      i
        transform translateX(-40px)
      > span
        transform translateX(-30px)
        opacity 1

  .is-fixed
    position fixed
    bottom 0
    width 868px
</style>
