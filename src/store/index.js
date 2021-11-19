import { createStore } from 'vuex'

export default createStore({
  state: {
    profileUserDetailTab: null,
    profileDepositTab: null
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
})
