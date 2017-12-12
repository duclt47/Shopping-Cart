var initialState = [
  {
    id: 1,
    name: 'iphone 7',
    image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-black-select-2016?wid=470&hei=556&fmt=png-alpha&qlt=95&.v=1472430090682',
    description : 'sản phẩm do apple sản xuất',
    price: 500,
    inventory : 10,
    rating : 3,
  },
  {
    id: 2,
    name: 'iphone X',
    image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',
    description : 'sản phẩm do apple sản xuất',
    price: 800,
    inventory : 2,
    rating : 5,
  },
  {
    id: 3,
    name: 'SONY X',
    image: 'https://stcv4.hnammobile.com//downloads/8/3-1488190024658.jpg',
    description : 'sản phẩm do sony sản xuất',
    price: 300,
    inventory : 10,
    rating : 2,
  },
];

const products = (state = initialState, action) => {
  switch(action.type) {
    default: return [...state];
  }
}

export default products;