function MyList(){
    const strings = ['Home', 'Shop', 'About Me'];
 
    const listItems = strings.map(string => <li>{string}</li>);

    return  (
        <div>  
            <h2>React Map Example</h2>  
            <ul>{listItems}</ul>  
        </div>  
    )
}

ReactDOM.render(<MyList />, document.getElementById('root'));