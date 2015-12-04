import ServerActions from "./actions/ServerActions"

export default {
  getAllPosts() {
    $.get('/posts')
    .success( rawPosts => ServerActions.receivedPosts(rawPosts))
    .error(error => console.log(error))
  }
}