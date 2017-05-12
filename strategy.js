
class Strategy extends Component {
  // Some methods
  ...
  
  render () {
    const Chosen = this.props.chosen
    return (
      <Chosen {...this.props} />
    )
  }
}

class FirstStrategy extends Component {
  render () {
    ...
  }
}

class SecondStrategy extends Component {
  render () {
    ...
  }
}

class ThirdStrategy extends Component {
  render () {
    ...
  }
}

// USING
  
<Strategy chosen={FirstStrategy} />
