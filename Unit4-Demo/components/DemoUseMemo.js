const MyComponent = () => {
    const [num, setNum] = React.useState(0);
    
    const getFactorial = val => {
      if (val === 0) return 1;
      return val * getFactorial(val - 1);
    };
    
    const calculatedFactorial = React.useMemo(() => {
      return num ? getFactorial(num) : 0;
    }, [num]);
    
    return (
      <div>
        <section className="box">
          <div>Enter a number:</div>
          <input value={num} onChange={(e) =>
            setNum(e.target.value)}
          />
        </section>
        <div className="box">Factorial: {calculatedFactorial}</div>
      </div>
    );
}
  
ReactDOM.render(
    <MyComponent />, 
    document.getElementById('root')
);