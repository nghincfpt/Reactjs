class Car extends React.Component {
    //Constructor
    constructor(props) {
        super(props);
        this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
        };
    }
    //Function change state (color)
    changeColor = () => {
        this.setState(
            {color: "blue", year: 2022}
        );
    }

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                It is a {this.state.color} of {this.state.model} model 
                from {this.state.year}.
                </p>
                <button
                    type="button"
                    onClick={this.changeColor}>
                    Change color
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Car />, 
    document.getElementById('root')
);