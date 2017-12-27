import { mapMutations } from 'vuex'
let forEach = Array.prototype.forEach

export const collapseMixin = {
  mounted () {
    this.meta = document.querySelectorAll('.meta')
    this.initArray()
    this.setFixList(this.fixGroups)
  },
  methods: {
    switcherState (index) {
      if (this.switchers[index].expand === true) {
        this.meta[index].style.height = '0'
        this.switchers[index].expand = false
      } else {
        this.meta[index].style.height = 'auto'
        this.switchers[index].expand = true
      }
    },
    initArray () {
      const boundArray = []
      forEach.call(this.meta, (el) => {
        boundArray.push(el.offsetTop)
      })
      this.setMetaList(boundArray)
    },
    ...mapMutations({
      setMetaList: 'SET_METALIST',
      setFixList: 'SET_FIX_LIST'
    })
  }
}
