import { createStore } from 'vuex'

const store =  createStore({
  state: {
    profileActiveTab: "null",
  },
  mutations: {
    setProfileActiveTab(state, payload) {
      state.profileActiveTab = payload
    }
  },
  actions: {
  },
  modules: {
  }
});

export default store;