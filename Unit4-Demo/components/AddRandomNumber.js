
function AddRandomNumber(){
    const [number, setNumber] = React.useState([]);
    const generationNewRandomNumber = () => {
        setNumber([
            ...number,
            {
                id: number.length,
                value: Math.random() * 100
            }
        ]);
    };
    //Return
    return (
        <div>
            {/* List of generated number */}
            <ul>
                {number.map(item => (
                    <li key={item.id}> id = {item.id} - Value: {item.value} </li>
                ))}
            </ul>
            {/* button  */}
            <button onClick={generationNewRandomNumber}>
                Generation new Value Number
            </button>
        </div>
    );
}

//render component
ReactDOM.render( 
    <AddRandomNumber />, 
    document.getElementById("root") 
); 



