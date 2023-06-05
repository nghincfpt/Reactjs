
class LifecycleComponentCreation extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        count: this.props.initialCount
      };
    }
    
    upCount() {
      this.React.setState((prevState) => ({
        count: prevState.count + 1
      }));
    }
    
    // Component Update
    componentWillReceiveProps(nextProps){
      if (nextProps.initialCount && nextProps.initialCount > this.state.count){
        this.React.setState({
          count : nextProps.initialCount
        });
      }
    }

    componentShouldUpdate(nextProps, nextState){
      return this.props.name !== nextProps.name ||
        this.state.count !== nextState.count;
    }

    // render
    render() {
      return (
        <div>
          Hello, {this.props.name}!<br />
          You clicked the button {this.state.count} times.<br />
          <button onClick={this.upCount}>Click here!</button>
        </div>
      );
    }
  }
  
  LifecycleComponentCreation.defaultProps = {
    name: 'Bob',
    initialCount: 0
  };

  ReactDOM.render(
    <LifecycleComponentCreation />, 
    document.getElementById('root')
);