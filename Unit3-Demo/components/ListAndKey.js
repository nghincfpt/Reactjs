const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
];

function CarItem(props) {
    return <li>I am a { props.brand }</li>;
}
  
function CarList() {
    return (
      <>
            <h1>List Of Cars</h1>
            <ul>
                {cars.map((car) => <CarItem key={car.id} brand={car.brand} />)}
            </ul>
      </>
    );
}
  
ReactDOM.render(<CarList />, document.getElementById('root'));