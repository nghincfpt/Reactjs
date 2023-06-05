import { useState, useEffect } from "react";
import {
    textAlphabetValidator,
    emailValidator,
    phoneValidator,
} from "./validate";

export default function ContactForm() {

    const initialValues = { username: '', phone: '', email: '', message: '' };
    const [values, setValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validateInput(values));
        setIsSubmit(true);
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(values);
        }
    }, [formErrors]);

    const validateInput = (inputs) => {
        const errors = {};
        errors.username = textAlphabetValidator(inputs.username);
        errors.message = textAlphabetValidator(inputs.message);
        errors.email = emailValidator(inputs.email);
        errors.phone = phoneValidator(inputs.phone);
        return errors;
    }

    return (
        <section id="contact">
            <div className="container">
                {/* Contact Heading*/}
                <h2 className="text-center text-uppercase mb-2">Contact Me</h2>
                {/* Contact Form*/}
                <div className="row">
                    <div className="col-12 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="control-group">
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input className="form-control" id="name" type="text" placeholder="Your Name"
                                        name="username"
                                        value={values.username}
                                        onChange={handleInputChange}
                                    />
                                    <p className="text-danger"> {formErrors.username} </p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input className="form-control" id="email" type="email" placeholder="Email Address"
                                        name="email"
                                        value={values.email}
                                        onChange={handleInputChange}
                                    />
                                    <p className="text-danger"> {formErrors.email} </p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input className="form-control" id="phone" type="tel" placeholder="Phone Number"
                                        name="phone"
                                        value={values.phone}
                                        onChange={handleInputChange}
                                    />
                                    <p className="text-danger"> {formErrors.phone} </p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control" id="message" rows={5} placeholder="Your Message"
                                        name="message"
                                        value={values.message}
                                        onChange={handleInputChange}
                                    />
                                    <p className="text-danger"> {formErrors.message} </p>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" id="send" type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}