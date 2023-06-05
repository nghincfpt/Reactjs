import React from "react";
import countries from "./countries";

export default function ControlledComponentApp(){

    const [username, setUserName] = React.useState("");
    const [phone, setphone] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [acceptedTerms, setAcceptedTerms] = React.useState(false);

    const handleSubmit = (event) => {
        console.log(`
            User Name: ${username}
            Phone: ${phone}
            Country: ${country}
            Accepted Terms: ${acceptedTerms}
        `);        
        event.preventDefault();
    }

    return (
        <>                       
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <label> User name: </label>  
                <input name="username" type="text" value={username} onChange={e => setUserName(e.target.value)} />      
                <br/>
                <label> Phone: </label>
                <input name="phone" type="number" value={phone} onChange={e => setphone(e.target.value)}/>
                <br/>
                <label> Country: </label>
                <select name="country" value={country} onChange={e => setCountry(e.target.value)}>
                    <option key=""></option>
                        {countries.map(country => (
                            <option key={country}>{country}</option>
                        ))}
                </select>
                <br/>
                <label>
                    <input name="acceptedTerms" type="checkbox" onChange={e => setAcceptedTerms(e.target.value)} />
                    I accept the terms of service        
                </label>
                <br/>
                <button>Submit</button>
            </form>
        </>
    );
}