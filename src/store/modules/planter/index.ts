const PlanterModule = {
  state: {
    temp: null,
    orp: null,
    ph: null
  },
  mutations: {
    UPDATE_TEMP(state: any, payload: number) {
      state.temp = payload;
    }
  },
  actions: {
    UPDATE_TEMP({ commit }, data: number) {
      console.log(data);
      commit("UPDATE_TEMP", data);
    }
  }
};

export default PlanterModule;
