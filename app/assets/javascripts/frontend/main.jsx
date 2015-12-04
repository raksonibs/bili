import React from 'react';
import PostStore from "./stores/PostStore"
import PostActions from "./actions/PostActions"
PostActions.getAllPosts();

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { postsList: []}
  }

  render() {
    return <div> test </div>
  }
}

// React.render(
//   <h1>test</h1>, 
//   document.getElementById('hello')
// );