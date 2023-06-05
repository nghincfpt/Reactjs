
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
  const value = React.useContext(Context);
  return <span>{value}</span>;
}

//render component
ReactDOM.render( 
    <Main />, 
    document.getElementById("root") 
); 