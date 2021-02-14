import Vue from "vue";
import Vuex from "vuex";
import visualState from "@/store/modules/visualState";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  modules: {
    visualState
  }
});
