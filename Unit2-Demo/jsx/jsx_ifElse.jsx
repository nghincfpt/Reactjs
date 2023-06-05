let text;
let age = 20;
let drinkingAge = 18;

if (age >= drinkingAge) { text = 'Buy Drink' }
else { text = 'Do Teen Stuff' }

const headline = <h1>{ text }</h1>

ReactDOM.render(headline, document.getElementById('root'));