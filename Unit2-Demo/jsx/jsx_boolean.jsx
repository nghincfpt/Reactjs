        // Boolean (&&) 
        // All of the list items will display if
        // human is false and age is above 25
        let human = "";
        let age = 50;
        const tasty = (
            <ul>
                <li>Applesauce</li>
                { !human && <li>Pizza</li> }
                { age > 15 && <li>Brussels Sprouts</li> }
                { age > 20 && <li>Oysters</li> }
                { age > 25 && <li>Grappa</li> }
            </ul>
        );

        ReactDOM.render(tasty, document.getElementById('root'));