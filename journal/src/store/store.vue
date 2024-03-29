<script>
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    // token: "",
    // userAccount: "",
    loginStatus: false,
    location: "",
  },
  mutations: {
    setLoginStatus(state, loginStatus) {
      state.loginStatus = loginStatus;
    },
  },
});
export default store;
</script>
