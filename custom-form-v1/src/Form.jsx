import React, { useState } from 'react';
import { FormSighUp } from './FormSignUp';
import { FormSuccess } from './FormSuccess';
import './Form.css'

export function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <>
            <div className="form-container">
                <span className="close-btn">x</span>
                <div className="form-content-left">
                    <img src="logo512.png" alt="logo" className="form-img" />
                </div>
                {!isSubmitted ? (
                    <FormSighUp submitForm={submitForm} />
                ) : (
                    <FormSuccess />
                )}
            </div>

        </>
    )
}