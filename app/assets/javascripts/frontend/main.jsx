// import React from 'react';
// import PostStore from "./stores/PostStore"
// import PostList from "./components/PostList"
// import PostActions from "./actions/PostActions"

// PostActions.getAllPosts();

// let getAppState = () => {
//   return { postsList: PostStore.getAll() };
// }

// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = getAppState();
//     // need to manually bind to this on e6
//     this._onChange = this._onChange.bind(this)
//   }

//   componentDidMount() {
//     PostStore.addChangeListener(this._onChange)
//   }

//   componentWillUnmount() {
//     PostStore.removeChangeListener(this._onChange)
//   }

//   _onChange() {
//     this.setState(getAppState())
//   }

//   render() {
//     return (
//       <PostList posts={this.state.postsList}/>
//     )
//   }
// }

let documentReady = () => {
  React.render(
    <h1> Hello </h1>,
    document.getElementById('react')
  )
}

$(documentReady)

