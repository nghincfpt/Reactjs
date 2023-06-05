class HelloClassComponent extends React.Component{
    render() {
        return React.createElement(
            'div',
            null,
            [
                React.createElement('h2',null,'Hello Fresher!'),
                React.createElement('h3',null,"I'm a React class component!"),
            ]
        );
    }
}
//render component
ReactDOM.render( 
    <HelloClassComponent />, 
    document.getElementById("root") 
); 
