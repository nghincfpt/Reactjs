const JsonData = [
    {
        "id":1,
        "name":"Akshit",
        "city":"Moradabad"
    },
    {
        "id":2,
        "name":"Nikita",
        "city":"Lucknow"
    },    
    {
        "id":3,
        "name":"Deeksha",
        "city":"Noida"
    },    
    {
        "id":4,
        "name":"Ritesh",
        "city":"Delhi"
    },    
    {
        "id":5,
        "name":"Somya",
        "city":"Gurugram"
    },    
    {
        "id":6,
        "name":"Eshika",
        "city":"Mumbai"
    },
    {
        "id":7,
        "name":"Kalpana",
        "city":"Rampur"
    },
    
    {
        "id":8,
        "name":"Parul",
        "city":"Chandigarh"
    },    
    {
        "id":9,
        "name":"Himani",
        "city":"Dehradun"
    }
]
// console.log(JsonData)
//
function DisplayJsonData(){
    const DisplayData = JsonData.map(
        (infoData) => {
            return (
                <tr key={infoData.id}>
                    <td>{infoData.id}</td>
                    <td>{infoData.name}</td>
                    <td>{infoData.city}</td>
                </tr>
            )
        }
    )
    //return
    return  (
        <div>
            <table className='css-table'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(<DisplayJsonData />, document.getElementById('root'));
