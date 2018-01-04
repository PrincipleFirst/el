let currentMeat
let beforeScrollTop = 0
let delta
export const collapseMixin = {
  data () {
    return {
      fixIndex: null
    }
  },
  mounted () {
    this.meta = document.querySelectorAll('.meta')
    this.initScroll()
  },
  watch: {
    fixIndex (newVal) {
      
    }
  },
  methods: {
    switcherState (index) {
      console.log('emit', index)
      if (this.switchers[index].expand === true) {
        this.meta[index].style.height = '0'
        this.switchers[index].expand = false
      } else {
        this.meta[index].style.height = 'auto'
        this.switchers[index].expand = true
        currentMeat = this.meta[index]
        this.fixIndex = index
        // const pos = currentMeat.getBoundingClientRect()
        // const clientHeight = document.documentElement.clientHeight
        // const fixedControl = pos.bottom > clientHeight && pos.top + 44 <= clientHeight
        // if (this.fixGroups[index].fix === fixedControl) return
        // this.fixGroups[index].fix = fixedControl
      }
    },
    initScroll () {
      const scrollParent = document.getElementById('main-scrollbar')
      scrollParent.addEventListener('scroll', this.scrollHandler)
    },
    scrollHandler (e) {
      let afterScrollTop = e.target.scrollTop
      delta = afterScrollTop - beforeScrollTop
      if (delta === 0) return
      beforeScrollTop = afterScrollTop
      console.log(currentMeat)
      if (currentMeat === undefined) return
      const pos = currentMeat.getBoundingClientRect()
      const index = parseInt(currentMeat.getAttribute('data-index'))
      this.fixIndex = index
      const t = pos.top
      const o = pos.bottom
      const clientHeight = document.documentElement.clientHeight
      const fixedControl = o > clientHeight && t + 44 <= clientHeight
      console.log(fixedControl, index)
      if (this.fixGroups[index].fix !== fixedControl) {
        console.log(666)
        this.fixGroups[index].fix = fixedControl
      }
      if (delta > 0) {
        if (index + 1 < this.meta.length) {
          const nextPos = this.meta[index + 1].getBoundingClientRect()
          if (nextPos.top < clientHeight) {
            currentMeat = this.meta[index + 1]
            this.fixIndex = index + 1
          }
        }
      } else {
        if (index > 0) {
          const prevPos = this.meta[index - 1].getBoundingClientRect()
          if (prevPos.bottom > 0) {
            currentMeat = this.meta[index - 1]
            this.fixIndex = index - 1
          }
        }
      }
    }
  }
}
