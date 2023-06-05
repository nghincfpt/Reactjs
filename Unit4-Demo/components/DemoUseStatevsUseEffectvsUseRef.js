function DemoUseStatevsUseEffectvsUseRef() {
    
    const [inputValue, setInputValue] = React.useState('');
    const prevInputValue = React.useRef('');

    React.useEffect(() => {
        prevInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {prevInputValue.current}</h2>
        </>
    );
} 
//render component
ReactDOM.render( 
    <DemoUseStatevsUseEffectvsUseRef />, 
    document.getElementById("root") 
); 
