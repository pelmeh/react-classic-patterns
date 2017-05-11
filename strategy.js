
class Proto extends Component {
  constructor (props) {
    super(props)
    this.chosen = {
      first: FirstStrategy,
      second: SecondStrategy,
      third: ThirdStrategy
    }[props.chosenStrategy]
  }
  
  // Some methods
  ...
  
  render () {
    const Chosen = this.chosen
    return (
      <Chosen
        {...this.props}
        context={this}
      />
    )
  }
}



class FirstStrategy extends Component {
  render () {
    // can access to parent's methods (from - this.props.context), but you should be carefully
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
