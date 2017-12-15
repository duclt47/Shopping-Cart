import * as types from './../constants/ActionsType';
// var data = JSON.parse(localStorage.getItem('CART'));
// var initialState = data ? data : [];
var initialState = [
  {
    product : {
      id: 1,
      name: 'iphone 7',
      image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-black-select-2016?wid=470&hei=556&fmt=png-alpha&qlt=95&.v=1472430090682',
      description : 'sản phẩm do apple sản xuất',
      price: 500,
      inventory : 2,
      rating : 3,
    },
    quantity: 1,
  },
  {
    product : {
      id: 2,
      name: 'iphone X',
      image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',
      description : 'sản phẩm do apple sản xuất',
      price: 800,
      inventory : 2,
      rating : 5,
    },
    quantity: 3
  }
];
const cart = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_TO_CARD:
      console.log(action)
      return[...state]
    default: return [...state];
  }
}

export default cart;