// Состояния для статичных элементов

const state = () => ({
  toggleMenu: false,
  advantagesItems: [
    { id: 1, text: "Качественные товары" },
    { id: 2, text: "Широкий ассортимент товаров" },
    { id: 3, text: "Быстрая доставка по всей России" },
    { id: 4, text: "Профессиональные консультанты" }
  ],
  links: [
    {
      id: 1,
      cardName: "Лыжы",
      backgroundImg: "image-catalog-link-ski.jpg",
      cardLink: "CatalogSki"
    },
    {
      id: 2,
      cardName: "Палки",
      backgroundImg: "image-catalog-link-poles.jpg",
      cardLink: "CatalogSkiPoles"
    },
    {
      id: 3,
      cardName: "Ботинки",
      backgroundImg: "images-catalog-link-boots.jpeg",
      cardLink: "CatalogSkiBoots"
    }
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
  },
  getLinks(state) {
    return state.links;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
