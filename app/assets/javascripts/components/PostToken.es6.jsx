class PostToken extends React.Component {
  render() {
    return (
      <div className={this.props.type + " " + this.props.indexPart}>
        {this.props.text} <br />
      </div>
    )
  }
}