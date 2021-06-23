import CartActionTypes from "./cart.types";
import { addItemToCartUtil } from "./cart.utils";

const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCartUtil(state.cartItems, action.payload),
        hidden: true,
      };
    default:
      return state;
  }
};

export default cartReducer;
