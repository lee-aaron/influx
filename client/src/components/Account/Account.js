import React from 'react';
import './style.scss';

const Account = ({ handleForm, handleChange }) => (
    <div className="account">
        <section className="login">
            <div className="login-title">Login</div>
            <form className="login-form" onSubmit={handleForm}>
                <div>
                    <label>Username or Email Address</label>
                    <input type="text" name="username" autoComplete="username" onChange={handleChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" autoComplete="password" onChange={handleChange} />
                </div>
                <button className="login-button" type="submit">Log in</button>
            </form>
        </section>
    </div>
)

export default Account;