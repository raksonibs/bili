import React from 'react';

class PostList extends React.Component {
  render() {
    let posts = this.props.posts.map(tweet => <Post {... post }/>)
    return (
      <div>
        <ul>
        {posts}
        </ul>
      </div>
    )
  }
}