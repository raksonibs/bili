class Post extends React.Component {  
  render() {
    return (
      <div>
        <div className="left">          
          {
            this.props.spanish_text.split(/,\s\.*/).map((split, index) => {
              return <PostToken key={index} indexPart={index} text={split} type={"spanish"}/>
            })
          }
        </div>
        <div className={ this.props.learning ? "learning right" : "not-learning right"}> 
          {
            this.props.english_text.split(/,\s\.*/).map((split, index) => {
              return <PostToken key={index} indexPart={index} text={split} type={"english"} />
            })
          }
        </div>
      </div>
    )
  }
}