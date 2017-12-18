import * as messages from './../constants/Messages';
import * as types from './../constants/ActionsType';
var initialState = messages.MSG_WELCOM;

const message = (state = initialState, action) => {
  switch(action.type) {
    case types.CHANGE_MASSAGE:
      return action.message;
    default: return state;
  }
}

export default message;