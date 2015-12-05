import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

export default {
  receivedPosts(rawPosts) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_POSTS,
      rawPosts
    })
  }
}