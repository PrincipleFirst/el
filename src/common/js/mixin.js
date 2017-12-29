let state = 'down'
let firstInit = 'yes'
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
      // console.log(newVal)
      if (newVal.length === this.meta.length) {
        
      }
    }
  },
  methods: {
    switcherState (index) {
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
          console.log('init')
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
        if (entrie.intersectionRatio === 0) {
          this.fixGroups[currentIndex].fix = false
        } else {
          if (firstInit === 'no' && state === 'up') {
            console.log(22)
            this.fixGroups[currentIndex].fix = false
            return
          }
          if (firstInit === 'yes') {
            console.log(11)
            this.fixGroups[this.index].fix = true
            firstInit = 'no'
            return
          }
          if (state === 'down') {
            this.fixGroups[currentIndex].fix = true
            return
          }
          this.fixGroups[currentIndex].fix = false
        }
      } else {
        console.log('h3', currentIndex)
        if (entrie.intersectionRatio > 0) {
          this.fixGroups[currentIndex].fix = false
          console.log(11)
        } else {
          if (state === 'up') {
            this.fixGroups[currentIndex].fix = true
            console.log(22)
            return
          }
          this.fixGroups[currentIndex].fix = false
          console.log(33)
        }
      }
    }
  }
}
