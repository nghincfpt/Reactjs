
function FuncCounterUseState() {
    const [ value, setValue]= React.useState(0);
    
    const handleIncrement = () => {
        setValue(value + 1)
      }
      const handleDecrement = () => {
        setValue(value - 1)
      }
      return (
        <>
        <div className="counter">
          <h1>COUNTER with Function Component</h1>
          <div className="buttons">
            <button data-testid="increment" onClick={handleIncrement}>Increment</button>
            <button data-testid="decrement" onClick={handleDecrement}>Decrement</button>
          </div>
          <p data-testid="count">{value}</p>
        </div>
        </>
      );
    }

//render component
ReactDOM.render( 
    <FuncCounterUseState />, 
    document.getElementById("root") 
); 
