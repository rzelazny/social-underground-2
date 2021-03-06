import React, { useState } from "react";
import $ from 'jquery';
import {Container} from "reactstrap";

function Login() {

    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    // When the form is submitted, we validate there's an email and password entered
    function handleFormSubmit(event) {
        console.log("Login form submitted");
        event.preventDefault();
        var userData = {
            email: email.trim(),
            password: password.trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
    };

    const handleEmailChange = event => {
        console.log("form changed");
        const { value } = event.target;
        setEmail(value);
    };

    const handlePassChange = event => {
        const { value } = event.target;
        setPassword(value);
    }

    // loginUser does a post to our "api/login" route and if successful, redirects us the the setup page
    function loginUser(email, password) {
        console.log(`attempting to log in with , ${email}, ${password}`)
        $.post("/api/login", {
            email: email,
            password: password
        })
            .then(function (user) {
                window.location.replace("/home");
            })// If there's an error, log the error
            .catch(function (err) {
                console.log(err);
            });
    }

    return (
        <Container id="loginbody">
        <div className="container box">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Login Form</h2>
                    <form className="login" onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email"
                                onChange={handleEmailChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password"
                                onChange={handlePassChange} />
                        </div>
                        <button type="submit" className="btn btn-success">Login</button>
                    </form>
                    <p>Or sign up <a href="/signup">here</a></p>
                    <br />
                </div>
            </div>
        </div>
        </Container>
    );
}

export default Login;
