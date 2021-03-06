import React from 'react';
import { useForm } from './hooks/useForm'
import validate from './hooks/validateInfo'
import './Form.css'

export function FormSighUp({ submitForm }) {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate)
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Get stasrted with us today! Create your
                    account by filling put the information below.
                </h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">    
                        Name
                    </label>
                    <input 
                        id="username"
                        type="text" 
                        name="username" 
                        className="form-input" 
                        placeholder="Enter your name here"
                        value={values.username}
                        onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        E-mail
                    </label>
                    <input 
                        id="email"
                        type="email" 
                        name="email" 
                        className="form-input" 
                        placeholder="Enter your E-mail here"
                        value={values.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input 
                        id="password"
                        type="password" 
                        name="password" 
                        className="form-input" 
                        placeholder="Enter your E-mail here"
                        value={values.passwor}
                        onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm password
                    </label>
                    <input 
                        id="password2"
                        type="password" 
                        name="password2" 
                        className="form-input" 
                        placeholder="Enter your E-mail here"
                        value={values.password2}
                        onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                </div>

                <button className="form-input-btn" type="submit">
                    Sign Up
                </button>
                <span className="form-input-login">
                    Already have an account? Login <a href="#">here</a>
                </span>

            </form>
        </div>
    )
}