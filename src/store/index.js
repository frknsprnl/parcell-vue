import { createStore } from 'vuex'

const store =  createStore({
  state: {
    profileActiveTab: "null",
    user : null,
  },
  mutations: {
    setProfileActiveTab(state, payload) {
      state.profileActiveTab = payload
    },
    setUser(state, user) {
      console.log("user :>> ", user);
      state.user = user;
    },
  },
  actions: {
  },
  modules: {
  },
  getters : {
    _isAuthenticated: state => state.user !== null,
    _getCurrentUser(state) {
      const user = state.user;

      delete user?.password;
      return user;
    },
  }
});

export default store;