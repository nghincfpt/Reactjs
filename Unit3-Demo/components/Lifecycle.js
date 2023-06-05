class Lifecycle extends React.Component{
    constructor(props){
        super(props);
        this.state = {  date: new Date() }
    }
    componentDidMount(){
        console.log(" Initialize :: componentDidMount :: Component mounted");
        this.setTimeRef = setInterval(() => this.setTime(), 1000);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Update :: shouldComponentUpdate invoked :: Before update");
        return true;
    }
    static getDerivedStateFromProps(props, state) {
        console.log("Initialize / Update :: getDerivedStateFromProps :: Before update");
        return null;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Update :: getSnapshotBeforeUpdate :: Before update");
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Update :: componentDidUpdate :: Component updated");
    }
    componentWillUnmount() {
        console.log("Remove :: componentWillUnmount :: Component unmounted");
        clearInterval(this.setTimeRef)
    }
    setTime() {
        this.setState((state, props) => {
            console.log(state.date);
            return {
                date: new Date()
            }
        })
    }
    render() {
        return(
            <div>
                <p>The current time is <strong>{this.state.date.toString()} </strong></p>
            </div>
        );
    }
}

ReactDOM.render(
    <Lifecycle />, 
    document.getElementById('root')
);