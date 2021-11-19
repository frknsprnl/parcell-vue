import { createStore } from 'vuex'

export default createStore({
  state: {
    profileActiveTab: null,
  },
  mutations: {
    setProfileActiveTab(profileActiveTab, input) {
      profileActiveTab = input
    }
  },
  actions: {
  },
  modules: {
  }
});
