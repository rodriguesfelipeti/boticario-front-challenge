import { DRAWER_STATE } from '../actions/actionTypes';

const defaultState = {
  state: {
    right: false
  }
}

export const drawerReducer = (state = defaultState, action) => {

  switch (action.type) {

    case DRAWER_STATE:
      console.log(action)
      return {
        ...state,
        state: {right: action.state}
      }
    default:
        return state
  }
}

     
