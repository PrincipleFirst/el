let state = 'down'
let firstInit = 'yes'
let isMaxLength = 'close'
export const collapseMixin = {
  data () {
    return {
      observer: new IntersectionObserver(this.changeFix),
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
      this.fixGroups[this.index].fix = false
      this.index = index
      this.fixGroups[index].fix = true
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
      const currentIndex = entrie.target.getAttribute('data-index') * 1
      if (entrie.target.tagName === 'DIV') {
        if (entrie.intersectionRatio === 0) {
          if (isMaxLength === 'first' && currentIndex > 0 && currentIndex < this.meta.length - 2) {
            this.fixGroups[currentIndex - 1].fix = true
            return
          }
          if (firstInit === 'yes') {
            if (currentIndex > 0) {
              this.fixGroups[currentIndex - 1].fix = true
            }
            if (state === 'up') {
              this.fixGroups[currentIndex].fix = false
            }
            firstInit = 'no'
            return
          }
          this.fixGroups[currentIndex].fix = false
        } else {
          if (firstInit === 'no' && state === 'up') {
            this.fixGroups[currentIndex].fix = false
            return
          }
          if (firstInit === 'yes') {
            firstInit = 'no'
            if (this.index === 'close') {
              this.fixGroups[currentIndex].fix = true
              return
            }
            return
          }
          if (state === 'down') {
            this.fixGroups[currentIndex].fix = true
            return
          }
          this.fixGroups[currentIndex].fix = false
        }
      } else {
        if (entrie.intersectionRatio > 0) {
          if (currentIndex + 1 === this.meta.length && state === 'up') {
            this.fixGroups[currentIndex].fix = true
            return
          }
          this.fixGroups[currentIndex].fix = false
        } else {
          if (state === 'up') {
            this.fixGroups[currentIndex].fix = true
            return
          }
          if (isMaxLength === 'last') {
            if (currentIndex + 2 === this.meta.length) {
              this.fixGroups[currentIndex + 1].fix = false
            }
            return
          }
          this.fixGroups[currentIndex].fix = false
        }
      }
    }
  }
}
