import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants"
import {EventEmitter} from "events";


let _posts = [];

class PostEventEmitter extends EventEmitter {
  getAll() {
    return _posts;
  }

  emitChange() {
    this.emit("CHANGE");
  }

  addChangeListener(callback) {
    this.on("CHANGE", callback)
  }

  removeChangeListener(callback) {
    this.removeListener("CHANGE", callback);
  }
}

let PostStore = new  PostEventEmitter();

AppDispatcher.register( action => {
  // action.actionType === RECEIVED_POSTS
  switch(action.actionType) {
    case ActionTypes.RECEIVED_POSTS:
      _posts = action.rawPosts;
      PostStore.emitChange()
      break;
    default:
  }
})

export default PostStore;