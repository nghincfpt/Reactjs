function Greet({name}){
    const message = `Welcome, ${name}!`;
    
    console.log(`Render <Greet name =${name} />`);

    React.useEffect(() => {
        document.title = `${name}`;
        console.log(`Side-effect Runs - ${name}`);
    }, [name]);

    return <div> {message} </div>;
}

function MyApp(){
    const NAMES = ['Eric','Stan','Stan','Jonh','Butters'];
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        if(index === NAMES.length - 1){
            return;
        }
        setTimeout(() => setIndex((index) => index + 1), 2000);
    },[index]);

    return <Greet name={NAMES[index]} />;
}

//render component
ReactDOM.render( 
    <MyApp />, 
    document.getElementById("root") 
); 