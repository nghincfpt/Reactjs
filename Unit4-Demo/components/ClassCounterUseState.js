
class ClassCounterUseState extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    increment = () => {
      this.setState({
        count: this.state.count + 1,
      });
    }
    decrement = () => {
      this.setState({
        count: Math.max(this.state.count - 1),
      });
    }
    render() {
      return (
        <div className="counter">
          <h1>COUNTER COUNTER with Class Component</h1>
          <div className="buttons">
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
          </div>
          <p>{this.state.count}</p>
        </div>
      );
    }
  }

  //render component
ReactDOM.render( 
    <ClassCounterUseState />, 
    document.getElementById("root") 
); 
