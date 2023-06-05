import React from "react";

export default function DemoFormReactApp(){
    
    function handleInputBlur(event) {
        /* When passing the function to an event handler, 
        like onBlur we get access to data about the event (an object) */
        const inputText = event.target.value; // text typed into the input
        const inputName = event.target.name; // 'email' from name attribute
        console.log(`Handle Input blur. Text: ${inputText} and attribute Name: ${inputName}`);
    }

    function handleClick(event) {
        /* onClick doesn't usually need event data, 
        but it receives event data as well that we can use */    
        const eventType = event.type; // "click"
        const eventTarget = event.target.tagName; // <button>Submit</button>
        console.log(`Click Event. Event Type: ${eventType} and Event Target: ${eventTarget}`);
    }
        
    function handleSubmit(event) {
        /* 
        When we hit the return button, the form will be submitted, 
        as well as when a button with type="submit" is clicked.
        We call event.preventDefault() to prevent the default 
        form behavior from taking place, which is to send an HTTP request and reload the page.
        */
        event.preventDefault();
        // access all element within form
        const inputValue = event.target.elements.inputID.value;
        console.log(`Submit button Event. The value of the input element with the id "inputID": ${inputValue}`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input id="inputID" type="text" name="textData" onBlur={handleInputBlur} />
                <button onClick={handleClick}>Submit</button>
            </form>
        </>
    );
};