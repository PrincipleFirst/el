let state = 'down'
let firstInit = 'yes'
let isMaxLength = 'close'
let preIndex
// const initMap = new Map();
export const collapseMixin = {
  data () {
    return {
      observer: new IntersectionObserver(this.changeFix, {root: document.getElementById('main-scrollbar')}),
      index: 0,
      hasInit: []
    }
  },
  mounted () {
    this.meta = document.querySelectorAll('.meta')
    this.cursor = document.querySelectorAll('.cursor')
    this.initMousewheel()
  },
  watch: {
    hasInit (newVal) {
      const length = this.meta.length
      if (newVal.length === length) {
        console.log('数组达到最大')
        this.index = 'close'
        if (newVal[length - 1] + 1 === length) {
          isMaxLength = 'last'
          return
        }
        isMaxLength = 'first'
      }
    }
  },
  methods: {
    switcherState (index) {
      console.log('emit', index)
      if (this.index !== 'close') {
        this.fixGroups[this.index].fix = false
      }
      this.index = index
      if (this.switchers[index].expand === true) {
        this.meta[index].style.height = '0'
        this.switchers[index].expand = false
      } else {
        this.meta[index].style.height = 'auto'
        this.switchers[index].expand = true
        if (!this.hasInit.includes(index)) {
          this.observer.observe(this.meta[index])
          this.observer.observe(this.cursor[index])
          firstInit = 'yes'
          this.hasInit.push(index)
        }
      }
    },
    initMousewheel () {
      document.getElementById('main-scrollbar').onmousewheel = function (e) {
        if (e.wheelDelta > 0) {
          state = 'up'
        }
        if (e.wheelDelta < 0) {
          state = 'down'
        }
      }
    },
    changeFix (entries) {
      const entrie = entries[0]
      console.log(entrie)
      const currentIndex = entrie.target.getAttribute('data-index') * 1
      if (entrie.target.tagName === 'DIV') {
        console.log(`DIV${currentIndex}`)
        if (entrie.intersectionRatio === 0) {
          console.log(`DIV消失`)
          if (isMaxLength === 'first' && currentIndex > 0 && currentIndex < this.meta.length - 2) {
            console.log('最后加入数组的是第一个meta', '当前fix-1 展开')
            this.fixGroups[currentIndex - 1].fix = true
            return
          }
          if (firstInit === 'yes') {
            firstInit = 'no'
            if (currentIndex > 0) {
              console.log(11, '当前fix-1 展开')
              this.fixGroups[currentIndex - 1].fix = true
              return
            }
            if (state === 'up') {
              console.log(22, '当前fix收起')
              this.fixGroups[currentIndex].fix = false
              return
            }
          }
          console.log(33, '当前fix收起')
          this.fixGroups[currentIndex].fix = false
          console.log(this.index)
          if (this.index === 'close') {
            console.log(5623, preIndex)
            const pos = this.cursor[preIndex].getBoundingClientRect()
            console.log(pos, window.innerHeight)
            if (pos.top > window.innerHeight) {
              console.log('noob')
              // this.fixGroups[preIndex].fix = true
              return
            }
            this.fixGroups[preIndex].fix = false
          }
        } else {
          console.log(`DIV出现`)
          if (firstInit === 'no' && state === 'up') {
            console.log(111, '当前fix收起')
            this.fixGroups[currentIndex].fix = false
            return
          }
          if (firstInit === 'yes') {
            console.log('这个meta首次初始化')
            firstInit = 'no'
            if (entrie.intersectionRatio === 1) {
              return
            }
            if (this.index === 'close') {
              console.log(222, '当前fix展开')
              this.fixGroups[currentIndex].fix = true
              return
            }
            console.log('this.index', this.index)
            this.fixGroups[this.index].fix = true
            preIndex = this.index
            this.index = 'close'
            return
          }
          if (state === 'down') {
            console.log(333, '当前fix展开')
            const pos = this.cursor[currentIndex].getBoundingClientRect()
            console.log(pos, window.innerHeight)
            if (pos.top > window.innerHeight) {
              console.log('noob2')
              return
            }
            this.fixGroups[currentIndex].fix = true
            return
          }
          console.log(444, '当前fix收起')
          this.fixGroups[currentIndex].fix = false
        }
      } else {
        console.log(`H3=>${currentIndex}`)
        if (entrie.intersectionRatio > 0) {
          console.log(`H3出现`)
          if (currentIndex + 1 === this.meta.length && state === 'up') {
            console.log(1, '当前fix展开')
            this.fixGroups[currentIndex].fix = true
            return
          }
          console.log(2, '当前fix收起')
          if (state === 'up') {
            this.fixGroups[currentIndex].fix = true
            return
          }
          this.fixGroups[currentIndex].fix = false
        } else {
          console.log(`H3消失`)
          if (state === 'up') {
            console.log(3, '当前fix展开')
            this.fixGroups[currentIndex].fix = true
            return
          }
          if (isMaxLength === 'last') {
            if (currentIndex + 2 === this.meta.length) {
              console.log(4, '当前+1 fix展开')
              this.fixGroups[currentIndex + 1].fix = true
              return
            }
            console.log('循环后折叠')
            return
          }
          console.log(5, '当前fix收起')
          this.fixGroups[currentIndex].fix = false
        }
      }
    }
  }
}
