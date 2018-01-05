<template>
  <div class="demo-block-control" :class="{'is-fixed':fixedControl===true}" @click="changeState" ref="blockControl">
    <i class="el-icon-caret-bottom"
       :class="{'el-icon-caret-top':isExpanded===true}"></i><span>{{isExpanded === false ? '显示' : '隐藏'}}代码</span>
  </div>
</template>

<script>
  const clientHeight = document.documentElement.clientHeight
  export default {
    data () {
      return {
        fixedControl: false,
        isExpanded: false,
        scrollParent: null
      }
    },
    watch: {
      isExpanded: function (newVal) {
        console.log(newVal)
        const meta = this.$refs.blockControl.previousElementSibling
        if (newVal === true) {
          const pos = meta.getBoundingClientRect()
          this.fixedControl = pos.bottom > clientHeight && pos.top + 44 <= clientHeight
          setTimeout(() => {
            this.scrollParent = document.getElementById('main-scrollbar')
            this.scrollParent.addEventListener('scroll', this.scrollHandler)
          }, 200)
        } else {
          this.fixedControl = false
          this.removeScrollHandler()
        }
      }
    },
    methods: {
      changeState () {
        this.isExpanded = !this.isExpanded
        const meta = this.$refs.blockControl.previousElementSibling
        if (this.isExpanded === true) {
          meta.style.height = 'auto'
        } else {
          meta.style.height = '0'
        }
        this.$emit('switcher', this.index)
      },
      scrollHandler () {
        if (this.isExpanded === true) {
          const pos = this.$refs.blockControl.previousElementSibling.getBoundingClientRect()
          const fixed = pos.bottom > clientHeight && pos.top + 44 <= clientHeight
          if (this.fixedControl !== fixed) {
            this.fixedControl = fixed
          }
        }
      },
      removeScrollHandler () {
        this.scrollParent && this.scrollParent.removeEventListener('scroll', this.scrollHandler)
      }
    },
    beforeDestroy () {
      this.removeScrollHandler()
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
