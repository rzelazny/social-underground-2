import React, { useState, useEffect } from "react";
import $ from 'jquery';

function Signup() {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);

    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const handleEmailChange = event => {
        console.log("form changed");
        const { value } = event.target;
        setEmail(value);
    };

    const handlePassChange = event => {
        const { value } = event.target;
        setPassword(value);
    }

    // When the signup button is clicked, we validate the email and password are not blank
    function handleFormSubmit(event) {
        console.log("signup form submit");
        event.preventDefault();
        var userData = {
            email: email.trim(),
            password: password.trim()
        };
        if (!userData.email || !userData.password) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData.email, userData.password);
        //emailInput.val("");
        //passwordInput.val("");

    };

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password) {
        console.log("signupuser function")

        $.post("/api/signup", {
            email: email,
            password: password
        })
            .then(function (data) {
                window.location.replace("/home");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }

    return (
        <div className="container box">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Sign Up Form</h2>
                    <form className="signup" onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email" 
                            onChange={handleEmailChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password"
                            onChange={handlePassChange}  />
                        </div>
                        <div style={{display: "none"}} id="alert" className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span> <span className="msg"></span>
                        </div>
                        <button type="submit" className="btn btn-default">Sign Up</button>
                    </form>
                    <br />
                    <p>Or login <a href="/login">here</a></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
