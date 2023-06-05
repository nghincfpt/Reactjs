const HelloFunctionComponent = () =>{ 
        return React.createElement(
            'div',
            null,
            [
                React.createElement('h2',null,'Hello Fresher!'),
                React.createElement('h3',null,"I'm a React Function component!"),
            ]
        );
};

//render component
ReactDOM.render( 
    <HelloFunctionComponent />, 
    document.getElementById("root") 
); 
