import Vue from "vue";
import Vuex from "vuex";
import PlanterModule from "./modules/planter/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    PlanterModule
  }
});
