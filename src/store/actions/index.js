import { CLICK_ADD_PRODUCT_TO_CART, 
         CLICK_REMOVE_PRODUCT, DRAWER_STATE,
         INCREASE_ITEM,
         DECREASE_ITEM } from './actionTypes';


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

export const increaseItem = index => ({
  type: INCREASE_ITEM,
  index: index
})

export const decreaseItem = index => ({
  type: DECREASE_ITEM,
  index: index
})