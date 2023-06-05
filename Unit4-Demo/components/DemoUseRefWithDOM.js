function InputFocus() {
    const inputRef = React.useRef();
    function handleInputFocus(){
       inputRef.current.focus();
    }
    return (
        <div>
            <input type="text" ref={inputRef} />
            <input
                type="button" value="Focus the text input" onClick={handleInputFocus}
            />                     
        </div>
    );
} 
//render component
ReactDOM.render( 
    <InputFocus />, 
    document.getElementById("root") 
); 
