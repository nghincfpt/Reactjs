import React from "react";
import { 
    textAlphabetValidator, 
    emailValidator, 
    phoneValidator 
} from "./validate";

export const ContactFormValidator = (inputForm) => {

    const [errors, setErrors] = React.useState({
        name: {          
            error: false,
            message: "",
        },
        email: {          
          error: false,
          message: "",
        },
        phone: {
          error: false,
          message: "",
        },
        message: {
          error: false,
          message: "",
        },
    });

    const validateForm = ({inputFormState, field, errors}) => {
        let isValid = true;
        let nextErrors = JSON.parse(JSON.stringify(errors));
        const {name, email, phone, message} = inputFormState;
    
        if (field ? field === "name" : true) {
            const nameErrorMessage = textAlphabetValidator(name, inputFormState);
            nextErrors.name.error = !!nameErrorMessage;
            nextErrors.name.message = nameErrorMessage;
            if(!!nameErrorMessage) isValid = false;
        }
        if (field ? field === "message" : true) {
            const messageErrorMessage = textAlphabetValidator(message, inputFormState);
            nextErrors.message.error = !!messageErrorMessage;
            nextErrors.message.message = messageErrorMessage;
            if(!!messageErrorMessage) isValid = false;
        }
        if (field ? field === "email" : true) {
            const emailErrorMessage = emailValidator(email, inputFormState);
            nextErrors.email.error = !!emailErrorMessage;
            nextErrors.email.message = emailErrorMessage;
            if(!!emailErrorMessage) isValid = false;
        }
        if (field ? field === "phone" : true) {
            const phoneErrorMessage = phoneValidator(phone, inputFormState);
            nextErrors.phone.error = !!phoneErrorMessage;
            nextErrors.phone.message = phoneErrorMessage;
            if(!!phoneErrorMessage) isValid = false;
        }
    
        
    }
}

  