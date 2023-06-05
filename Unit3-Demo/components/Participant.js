// class Participant extends React.Component{
//     render () {
//         return (
//             <div>
//                 <h1> Hello { this.props.name }</h1>
//                 <h3> Welcome to { this.props.course } class at { this.props.location }</h3>
//             </div>
//         )
//     };
// }

function Participant(props){
    return (
        <div>
            <h1> Hello { props.name }</h1>
            <h3> Welcome to { props.course } class at { props.location }</h3>
        </div>
    )
}


//render component
ReactDOM.render( 
    <Participant name="Tuan Thinh" course = "Fresher ReactJS" location="Da Nang" />, 
    document.getElementById("root") 
); 