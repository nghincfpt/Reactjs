function Counter() {
    const [count, setCount] = React.useState(1); 
    const ref = React.useRef(1); 
    
    console.log(`the COUNT button increases: ${count}`);  
    // console.log(`the REF button increases: ${ref.current}`);
    const incCount = () => {   
        // console.log(`the COUNT button increases: ${count}`);      
        setCount(c => c + 1);               
    } 
    const incRef = () => {               
        ref.current++;        
        console.log(`the REF button increases: ${ref.current}`); 
    } 
    return (
        <div>
            <button onClick={incCount}>count: {count}</button> 
            <hr />
            <button onClick={incRef}> ref.current: {ref.current}</button> 
        </div>
    );
} 
//render component
ReactDOM.render( 
    <Counter />, 
    document.getElementById("root") 
); 
