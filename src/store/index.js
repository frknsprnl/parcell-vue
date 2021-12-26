import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

const store = createStore({
  state: {
    profileActiveTab: "UserDetails",
    user: null,
    paymentObject: null,
  },
  mutations: {
    setProfileActiveTab(state, payload) {
      state.profileActiveTab = payload
    },
    setUser(state, user) {
      console.log("state user :>> ", user);
      state.user = user;
    },
    logoutUser(state) {
      state.user = null;
      state.profileActiveTab = "UserDetails";
    },
    setPaymentObject(state, item) {
      state.paymentObject = item;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    _isAuthenticated: state => state.user !== null,
    _getCurrentUser(state) {
      const user = state.user;
      delete user?.password;
      return user;
    },
    _currentUserId: state => state?.user?.id,
    _getProfileActiveTab: state => state.profileActiveTab,
    _getUserAddress: state => state?.user?.address,
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      }
    })
  ]
});

export default store;