import Greet from './components/greet';

class Main extends React.Component {
  render() {
    return (
      <Greet />
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

