let posts = []

class PostList extends React.Component {
  constructor(props) {
    super(props);
    component = this;
    this.state = {
      posts: this.props.posts || posts
    }
  }

  componentDidMount() {

  }

  render() {    
    return (
      <div>
      { 
        this.state.posts.map((post, index) => {
          return <Post spanish_text={post.spanish_text} english_text={post.english_text} key={index} />
        })        
      }
      </div>
    ) 
  }
}