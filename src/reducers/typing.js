import { SET_TYPING_VALUE, SEND_MESSAGE } from '../constants/action-types';

export default (state = "", action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return "";
    case SET_TYPING_VALUE:
      return action.payload;
    default:
      return state;
  }
}