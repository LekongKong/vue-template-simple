import * as type from '../mutation-type'

const state = {
  payload: {}
}

const getters = {
  exampleGetter: state => state.payload
}

const actions = {
  exampleAction ({commit}, params) {
    commit(type.EXAMPLE_MUTATION, params)
  }
}

const mutations = {
  [type.EXAMPLE_MUTATION] (state, params) {
    state.payload = params
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
