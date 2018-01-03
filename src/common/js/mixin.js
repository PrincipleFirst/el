let state = 'down'
let firstInit = 'yes'
let isMaxLength = 'close'
export const collapseMixin = {
  data () {
    return {
      observer: new IntersectionObserver(this.changeFix),
      index: 0,
      currentMeat: null,
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
          firstInit = 'yes'
          this.hasInit.push(index)
        }
      }
    },
    initMousewheel () {
      document.getElementById('main-scrollbar').onmousewheel = function (e) {
        if (this.currentMeat === null) return
        if (e.wheelDelta > 0) {
          state = 'up'
          this.currentMeat.getBoundingClientRect()
          // console.log()
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
        if (entrie.intersectionRatio > 0) {
          console.log(`DIV出现`)
          this.currentMeat = entrie.target
          if (entrie.intersectionRatio < 1) {
            this.fixGroups[currentIndex].fix = true
          }
        }
      }
    }
  }
}
