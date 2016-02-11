var PostList = require('./components/PostLst')

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

