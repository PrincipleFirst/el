import * as types from './mutation-types'
import _ from 'lodash'

export const changeIndex = function ({commit, state}, {index, flag}) {
  let list = _.cloneDeep(state.fixlist)
  list[index].fix = flag
  commit(types.SET_FIX_LIST, list)
}
