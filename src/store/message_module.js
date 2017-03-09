const example_module {
  state: {
    message: 'Vue.js Starter Boilerplate'
  },
  mutations: {
    SET_MESSAGE (state, message) {
      state.message = message
    }
  },
  actions: {
    setMessage ({ commit, state }, message) {
      commit('SET_MESSAGE', message)
    }
  },
  getters: {
    getMessage (state) {
      return state.message
    }
  }
}

export default example_module