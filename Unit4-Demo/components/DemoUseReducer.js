const initialState = {count: 0};

const counterReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
};

function DemoUseReducer(){
    const [state, dispatch] = React.useReducer(counterReducer, initialState);    
    const handleIncrease = () => {
        dispatch({ type: 'INCREMENT' });
    };    
    const handleDecrease = () => {
        dispatch({ type: 'DECREMENT' });
    };
    return (
        <>
            <h1>Counter</h1>
            <p>Count: {state.count}</p>
            <div>
                <button type="button" onClick={handleIncrease}> + </button>
                <button type="button" onClick={handleDecrease}> - </button>
            </div>
        </>
    );
}

//render component
ReactDOM.render( 
    <DemoUseReducer />, 
    document.getElementById("root") 
); 