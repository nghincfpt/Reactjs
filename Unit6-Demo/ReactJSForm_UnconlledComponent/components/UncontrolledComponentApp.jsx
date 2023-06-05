import React from "react";

export default function UnconlledComponentApp(){
    
    const inputItem = React.useRef('');

    function handleSubmit(event) {        
        alert(`A name was submited: ${inputItem.current.value}`);        
        event.preventDefault();
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Name </label>
                <input type="text" ref={inputItem}/>
                <button type="submit"> Submit </button>
            </form>
        </>
    );
}