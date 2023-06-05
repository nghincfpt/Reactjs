function ToDoApp() {
    //...

     return (
       <div style={{ backgroundColor: "#44014C", width: "300px", minHeight: "200px"}}>
         <h2 style={{ padding: "10px 20px", textAlign: "center", color: "white"}}>ToDo App</h2>
        {/* ... */}
       </div>
     );
}
 
ReactDOM.render(
    <ToDoApp />, 
    document.getElementById('root')
);