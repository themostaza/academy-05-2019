const CounterView = props => {
  const { color, counter, onClick } = props;
  return (
    <>
      <h1 style={{ color }}>{counter}</h1>
      <button onClick={onClick}>{`Premi`}</button>
    </>
  );
};

class Counter extends React.Component {
  state = {
    counter: 0
  };

  componentDidMount() {
    setInterval(this.incrementValue, 1000);
  }

  incrementValue = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    const counters = ["red", "green", "blue", "grey", "yellow"];
    return (
      <>
        {counters.map(color => (
          <CounterView
            color={color}
            onClick={() => this.incrementValue()}
            counter={this.state.counter}
          />
        ))}
      </>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
