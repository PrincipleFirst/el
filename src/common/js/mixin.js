export const collapseMixin = {
  mounted() {
    this.meta = document.querySelectorAll('.meta')
  },
  methods: {
    switcherState(index) {
      console.log('emit', index)
      if (this.switchers[index].expand === true) {
        this.meta[index].style.height = '0'
        this.switchers[index].expand = false
      } else {
        this.meta[index].style.height = 'auto'
        this.switchers[index].expand = true
      }
    }
  }
}
