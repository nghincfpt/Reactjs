const TodoComponent = window.styled.div`
    width: 450px;
    margin: 0 auto;
    background-color: #44014C;
    min-height: 200px;
    box-sizing: border-box;
    text-align: center;
`;

const HeaderComponent = window.styled.h2`
    padding: 10px 20px;
    text-align: center;
    color: white;
    font-size: 22px;
`;

const ButtonComponent = window.styled.button`
    color: green;
    font-size: 1em;
    margin: 0.35em;
    padding: 0.5em 1em;
    border: 2px solid green;
    border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButtonComponent = window.styled(ButtonComponent)`
    color: tomato;
    border-color: tomato;
`;

/* Adapt the colors based on primary prop */
const Button = window.styled.button`
    background: ${props => props.primary ? "green" : "white"};
    color: ${props => props.primary ? "white" : "green"};
    font-size: 1em;
    margin: 1em;
    padding: 0.5em 1em;
    border: 2px solid ${props => props.primary ? "green" : "white"};
    border-radius: 3px;
`;

function ToDoApp() {
    
    return (
      <TodoComponent>
        <HeaderComponent>Extending Styles</HeaderComponent>
        <ButtonComponent>Normal Button</ButtonComponent>
        <TomatoButtonComponent>Extending Button</TomatoButtonComponent>

        <Button>Normal Button</Button>
        <Button primary>Button Have Prop Primary</Button>

      </TodoComponent>
    );
}
ReactDOM.render(
    <ToDoApp />, 
    document.getElementById('root')
);

