        // (2) Using ternary operator
        let age = 20;
        let drinkingAge = 18;

        const headline = (
            <h1>
                { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
            </h1>
        );

        ReactDOM.render(headline, document.getElementById('root'));