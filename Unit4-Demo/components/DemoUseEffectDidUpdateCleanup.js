function RepeatMessage({ message }) {
    React.useEffect(() => {
      const id = setInterval(() => {
        console.log(message);
      }, 2000);
      return () => {
        clearInterval(id);
      };
    }, [message]);
  
    return <div className="message">You're typing: "{message}"</div>;
}

function MyApp(){
    const [message, setMessage] = React.useState("Hello, World!");
    return (
        <div className="App">
        <h3>Type the message to Textbox</h3>
        <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
        <RepeatMessage message={message} />
        </div>
    );
}

//render component
ReactDOM.render( 
    <MyApp />, 
    document.getElementById("root") 
); 