function Participant(props){
    return (
        <div>
            <h1> Hello { props.name }</h1>
            <h3> Welcome to { props.course } class at { props.location }</h3>
        </div>
    )
}
//Default Props
Participant.defaultProps = {
    name: "Fresher",
    course: "ReactJS",
    location: "Da Nang"
}

//render component
ReactDOM.render( 
    <Participant />, 
    document.getElementById("root") 
); 