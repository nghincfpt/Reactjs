
const Context = React.createContext("Default Value");
function Main() {
  const value = "My Context Value";
  return (
    <Context.Provider value={value}>
      <MyComponent />
    </Context.Provider>
  );
}


function MyComponent() {
  return( 
    <Context.Consumer>
      {(value) => <span>{value}</span>}
    </Context.Consumer>
  );
}

//render component
ReactDOM.render( 
    <Main />, 
    document.getElementById("root") 
); 