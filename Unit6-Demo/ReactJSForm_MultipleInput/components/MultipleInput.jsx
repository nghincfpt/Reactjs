import React from "react";

export default function MultipleInput(){

    const [values, setValues] = React.useState({
        inputFields: {
            username: '',
            phone:'',
            email:'',
            address:''
        },
        people: []
    });


    const handleSubmit = (event) => {
        event.preventDefault();   
        const people = [
            ...values.people,
            values.inputFields
        ];
        // clear all the fields
        setValues({
            people,
            inputFields:{
                username: '',
                phone:'',
                email:'',
                address:'' 
            }
        });        
    }

    const handleInputChange = (event) => {
        const inputs = values.inputFields;
        inputs[event.target.name] = event.target.value;
        setValues({
            ...values,
            inputs
        });        
    }


    return (
        <>
            <h1>Create New People</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Your Name" value={values.username} onChange={handleInputChange} />
                <br />
                <input type="number" name="phone" placeholder="Your Phone" value={values.phone} onChange={handleInputChange} />
                <br />
                <input type="text" name="email" placeholder="Your Email" value={values.email} onChange={handleInputChange} />
                <br />
                <input type="text" name="address" placeholder="Your Address" value={values.address} onChange={handleInputChange}/>
                <br />
                <button type="submit">Add New People</button>
            </form>
            <div>
                <h3>List of Peoples</h3>
                <ul>
                    {
                        values.people.map(({username, phone, email, address}, index) => 
                            <li key={index}>{username} - {phone} - {email} - {address}</li>
                        )
                    }
                </ul>
            </div>
        </>
    );
}
