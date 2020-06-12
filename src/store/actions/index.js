import { CLICK_ADD_PRODUCT_TO_CART, CLICK_REMOVE_PRODUCT, DRAWER_STATE } from './actionTypes';


export const cartReducer = (item, index) => ({
  type: CLICK_ADD_PRODUCT_TO_CART,
  cart: item,
  index: index
})

export const removeItemCart = index => ({
  type: CLICK_REMOVE_PRODUCT,
  index: index
})

export const drawerReducer = state => ({
  type: DRAWER_STATE,
  state: state
})