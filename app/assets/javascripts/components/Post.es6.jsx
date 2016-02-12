class Post extends React.Component {
  render() {
    return (
      <div>
        <div className="left"> 
          {this.props.spanish_text}
        </div>
        <div className="right"> 
          {this.props.english_text}
        </div>
      </div>
    )
  }
}