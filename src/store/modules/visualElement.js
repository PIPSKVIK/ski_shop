const state = () => ({
  toggleMenu: false
});

const mutations = {
  changeToggleMenu(state) {
    state.toggleMenu = !state.toggleMenu;
  }
};

const actions = {};

const getters = {
  getToggleMenu(state) {
    return state.toggleMenu;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
