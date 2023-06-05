
// This is a stateless child component.
class ChildComponent extends React.Component {
  render() {
    return <h2>I am {this.props.name}!</h2>;
  }
}
 
// This is a stateful Parent element.
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Parent element' };
  }
 
  // The child component will render information passed down from the parent component.
  render() {
    return <ChildComponent name={this.state.name} />;
  }
}

ReactDOM.render(
    <ParentComponent />, 
    document.getElementById('root')
);
  