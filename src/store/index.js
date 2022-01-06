import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

const store = createStore({
  state: {
    profileActiveTab: "UserDetails",
    user: null,
    paymentObject: null,
    invoice: null,
  },
  mutations: {
    setProfileActiveTab(state, payload) {
      state.profileActiveTab = payload
    },
    setUser(state, user) {
      state.user = user;
    },
    logoutUser(state) {
      state.user = null;
      state.paymentObject = null,
        state.invoice = null
      state.profileActiveTab = "UserDetails";
    },
    setPaymentObject(state, item) {
      state.paymentObject = item;
    },
    setInvoice(state, payload) {
      state.invoice = payload;
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
    _getPaymentObject: state => state.paymentObject,
    _getUserBalance: state => state?.user?.balance,
    _getUserName: state => state?.user?.name + " " + state?.user?.surname,
    _getUserInvoice: state => state.invoice,
    _getLoginCheck: state => {
      if (state.user === null) {
        return null
      }
      else {
        return "" + state.user.id
      }
    }
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