var initialState = [
  {
    id: 1,
    name: 'iphone 7',
    image: '',
    description : 'sản phẩm do apple sản xuất',
    price: 500,
    inventory : 10
  },
  {
    id: 2,
    name: 'iphone X',
    image: '',
    description : 'sản phẩm do apple sản xuất',
    price: 800,
    inventory : 2
  },
  {
    id: 3,
    name: 'SONY X',
    image: '',
    description : 'sản phẩm do sony sản xuất',
    price: 300,
    inventory : 10
  },
];

const product = (state = initialState, action) => {
  switch(action.type) {
    default: return [...state];
  }
}

export default product;