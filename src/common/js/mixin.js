// import { mapMutations } from 'vuex'

// let forEach = Array.prototype.forEach
// const h3 = document.querySelectorAll('h3')
export const collapseMixin = {
  data () {
    return {
      observer: new IntersectionObserver(this.changeFix),
      index: 0
    }
  },
  mounted () {
    this.meta = document.querySelectorAll('.meta')
    this.h3 = document.querySelectorAll('h3')
    // this.initArray()
    // this.setFixList(this.fixGroups)
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
        this.observer.observe(this.meta[index])
        this.observer.observe(this.h3[index + 1])
      }
    },
    // initArray () {
    //   const boundArray = []
    //   forEach.call(this.meta, (el) => {
    //     boundArray.push(el)
    //   })
    //   this.setMetaList(boundArray)
    // },
    changeFix (entries) {
      const entrie = entries[0]
      console.log(entrie)
      if (entrie.target.tagName === 'DIV') {
        if (entrie.intersectionRatio < 1) {
          this.fixGroups[this.index].fix = true
          console.log(this.meta[this.index])
        }
      } else {
        if (entrie.intersectionRatio > 0) {
          console.log(54)
          this.fixGroups[this.index].fix = false
        }
      }
    }
    // ...mapMutations({
    //   setMetaList: 'SET_METALIST',
    //   setFixList: 'SET_FIX_LIST'
    // })
  }
}
