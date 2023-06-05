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
    return (
      <li>
        {item.title} - {item.price}
      </li>
    );
};


const AppDemo = () => {
    return (
      <div>
        <BookList list={DATA} />
      </div>
    );
};
//render component
ReactDOM.render( 
    <AppDemo />, 
    document.getElementById("root") 
); 