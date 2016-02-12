var PostList = require('./components/PostList')
// having trouble with multiple components, they aren't being respected. might use react-rails gem


// class PostList extends React.Component {
//   render() {    
//     return (
//       <div>
//         test
//       </div>
//     ) 
//   }
// }

let posts = [{spanish_text: 'blah', english_text: 'vale'}, {english_text: 'good', spanish_text: 'bueno'}]

class Main extends React.Component {
  render() {
    return (
       <PostList />
    )
  }
}

let documentReady = () => {
  React.render(
    <Main />,
    document.getElementById('react')
  )
}

$(documentReady)

