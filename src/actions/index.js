import * as types from './../constants/ActionsType';

export const actAddtoCart = ( product, quantity ) => {
  return {
    type : types.ADD_TO_CARD,
    product,
    quantity
  }
}

export const actChangeMessage = (message) => {
  return {
    type : types.CHANGE_MASSAGE,
    message
  }
}