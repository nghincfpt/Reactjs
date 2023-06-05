
function Football() {
    const shoot = (a) => {
      alert(a);
    }
  
    return (
      <button onClick={() => shoot("Goal!")}>Take the shot!</button>
    );
}
  
ReactDOM.render(<Football />, document.getElementById('root'));

