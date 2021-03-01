// Состояния для статичных элементов

const state = () => ({
  toggleMenu: false,
  advantagesItems: [
    { id: 1, text: "Качественные товары" },
    { id: 2, text: "Широкий ассортимент товаров" },
    { id: 3, text: "Быстрая доставка по всей России" },
    { id: 4, text: "Профессиональные консультанты" }
  ]
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
  },
  getAdvantagesItems(state) {
    return state.advantagesItems;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
