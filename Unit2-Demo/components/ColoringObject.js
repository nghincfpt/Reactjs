  const colorObject = {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Colouring_pencils.jpg/800px-Colouring_pencils.jpg',
      alt: 'Colouring pencils',
      width: '640px',
      height: '427px'
  };
   
  class ColorObject extends React.Component {
    render() {
      return (
        <div>
          <h1>Colouring pencils</h1>
          <img
            src = {colorObject.src}
            alt = {colorObject.alt}
            width = {colorObject.width}
            height = {colorObject.height}
          />
        </div>
      );
    }
  }

  //render component
  ReactDOM.render( 
    <ColorObject />, 
    document.getElementById("root") 
  );