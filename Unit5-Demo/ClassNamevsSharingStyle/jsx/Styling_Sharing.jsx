const TodoComponent = {
    width: "300px",
    margin: "30px auto",
    padding: "0 0.5em",
    backgroundColor: "#44014C",
    minHeight: "230px",
    boxSizing: "border-box"
}
    
const Header = {
    padding: "10px 0",
    textAlign: "center",
    color: "white",
    fontSize: "22px",
    margin: "0"
}

const Item = {
    width: "100%",
    padding: "1em 0em",
    backgroundColor: "gray",
    margin: "0.35em 0"
}

const AppStyles = {
    TodoComponent: TodoComponent,
    Header: Header,
    Item: Item
}

function ToDoApp() {
    
    return (
      <div style={AppStyles.TodoComponent}>
        <h2 style={AppStyles.Header}>Sharing styles across many React components</h2>
        <div style={AppStyles.Item}></div>
        <div style={AppStyles.Item}></div>
        <div style={AppStyles.Item}></div>
        <div style={AppStyles.Item}></div>
      </div>
    );
}
ReactDOM.render(
    <ToDoApp />, 
    document.getElementById('root')
);