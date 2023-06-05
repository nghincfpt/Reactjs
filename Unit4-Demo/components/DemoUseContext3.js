const DATA = [
    {
      id: '1',
      title: 'The Road to React',
      price: 19.99,
    },
    {
      id: '2',
      title: 'The Road to GraphQL',
      price: 29.99,
    },
];
const CURRENCIES = {
    EURO: {
      symbol: '€',
      label: 'Euro',
    },
    USD: {
      symbol: '$',
      label: 'US Dollar',
    },
    VND: {
        symbol: 'VND',
        label: 'Vietnam Dong',
      },
};

const CurrencyContext = React.createContext('');


const BookList = ({ list }) => {
    return (
      <ul>
        {list.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </ul>
    );
};

const Book = ({ item }) => {
    const currency  = React.useContext(CurrencyContext);
    return (
      <li>
        {item.title} - {item.price} {currency.symbol}
      </li>
    );
};

const CurrencyProvider = ({ value, children }) => {
    return (
      <CurrencyContext.Provider value={value}>
        {children}
      </CurrencyContext.Provider>
    );
};

const CurrencyButton = ({ onClick, children }) => {
    return (
      <button type="button" onClick={onClick}>
        {children}
      </button>
    );
};

const CurrencyButtons = ({ onChange }) => {
    return Object.values(CURRENCIES).map((item) => (
      <CurrencyButton key={item.label} onClick={() => onChange(item)}>
        {item.label}
      </CurrencyButton>
    ));
};

const AppDemo = () => {
    const [currency, setCurrency] = React.useState(CURRENCIES.EURO);
    return (
        <CurrencyProvider value={currency}>
            <CurrencyButtons onChange={setCurrency} />
            <BookList list={DATA} />
        </CurrencyProvider>
    );
};

//render component
ReactDOM.render( 
    <AppDemo />, 
    document.getElementById("root") 
); 