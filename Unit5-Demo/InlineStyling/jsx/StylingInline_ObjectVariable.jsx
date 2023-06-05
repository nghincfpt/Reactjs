const TodoComponent = {
    width: "300px",
    margin: "30px auto",
    backgroundColor: "#44014C",
    minHeight: "200px",
    boxSizing: "border-box"
}
    
const Header = {
    padding: "10px 20px",
    textAlign: "center",
    color: "white",
    fontSize: "22px"
}
     
function ToDoApp() {
    
    return (
      <div style={TodoComponent}>
        <h2 style={Header}>ToDo</h2>
        {/* ... */}
      </div>
    );
}
ReactDOM.render(
    <ToDoApp />, 
    document.getElementById('root')
);