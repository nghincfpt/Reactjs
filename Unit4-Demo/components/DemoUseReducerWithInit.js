const initialCount = {count: 0};

function init(initialCount) {
    if (initialCount !== 0) { initialCount = 0 }
    return {count: initialCount};
}

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return init(action.payload);
        default:
            throw new Error();
    }
};

function DemoUseReducer(){
    const [state, dispatch] = React.useReducer(counterReducer, initialCount, init);    
    const handleIncrease = () => {
        dispatch({ type: 'INCREMENT' });
    };    
    const handleDecrease = () => {
        dispatch({ type: 'DECREMENT' });
    };
    const handleReset = () => {
        dispatch({ type: 'RESET', payload: initialCount });
    };
    return (
        <>
            <h1>Counter</h1>
            <p>Count: {state.count}</p>
            <div>
                <button onClick={handleReset}> Reset </button>
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