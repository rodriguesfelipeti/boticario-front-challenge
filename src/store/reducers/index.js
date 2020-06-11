import { cartReducer } from './cartReducer'
import { drawerReducer } from './drawerReducer'
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  cartReducer : cartReducer,
  drawerReducer: drawerReducer
});