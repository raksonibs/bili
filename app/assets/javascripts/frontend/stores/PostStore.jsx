import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants"

AppDispatcher.register( action => {
  // action.actionType === RECEIVED_POSTS
  switch(action.actionType) {
    case ActionTypes.RECEIVED_POSTS:
      break;
    default:
  }
})