// Basic example
const handleClick = () => alert("Hello ReactJS!");
 
const button = <button onClick={ handleClick }>Click here</button>;

ReactDOM.render(button, document.getElementById('root'));
