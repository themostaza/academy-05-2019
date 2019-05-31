function Welcome(props) {
  const fullName = `${props.name} ${props.surname}`;
  return <h1>Hello, {fullName}</h1>;
}

class WelcomeClass extends React.Component {
  render() {
    const fullName = `${this.props.name} ${this.props.surname}`;
    return <h1>Hello, {fullName}</h1>;
  }
}

ReactDOM.render(
  <WelcomeClass name="world" surname="!" />,
  document.getElementById("root")
);
