import Vue from "vue";
import Vuex from "vuex";
import visualElement from "@/store/modules/visualElement";
import catalog from "@/store/modules/catalog";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  modules: {
    visualElement,
    catalog
  }
});
