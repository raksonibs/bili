class Post extends React.Component {
  render() {
    return (
      <div>
        <li> 
          {this.props.spanish_text}
        </li>
        <li> 
          {this.props.english_text}
        </li>
      </div>
    )
  }
}