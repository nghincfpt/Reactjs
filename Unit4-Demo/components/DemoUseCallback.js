const functionsCounter = new Set()
const Counter = () => {
    const [count, setCount] = React.useState(0)
    const [otherCounter, setOtherCounter] = React.useState(0)
  
    const increment = React.useCallback(() => {
        setCount(count + 1)
    }, [count]);
    const decrement = React.useCallback(() => {
        setCount(count - 1)
    }, [count]);
    const incrementOtherCounter = React.useCallback(() => {
        setOtherCounter(otherCounter + 1)
    }, [otherCounter]);
  
    functionsCounter.add(increment)
    functionsCounter.add(decrement)
    functionsCounter.add(incrementOtherCounter)

    console.log(functionsCounter.size)
    return (
      <>
        Count: {count}       
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
      </>
    )
}
  
//render component
ReactDOM.render( 
    <Counter />, 
    document.getElementById("root") 
); 