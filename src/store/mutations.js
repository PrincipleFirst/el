import * as types from './mutation-types'

const mutations = {
  [types.SET_METALIST] (state, metaList) {
    state.metalist = metaList
  },
  [types.SET_FIX_LIST] (state, flag) {
    state.fixlist = flag
  }
}

export default mutations
