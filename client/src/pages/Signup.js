import React, { useState } from "react";
import $ from 'jquery';
import { Container } from "reactstrap";

function Signup() {

    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [reenterPw, setReenterPw] = useState([]);

    //set state when email is changed
    const handleEmailChange = event => {
        console.log("form changed");
        const { value } = event.target;
        setEmail(value);
    };

    //set state when password is changed
    const handlePassChange = event => {
        const { value } = event.target;
        setPassword(value);
    };

    //set state when password2 is changed
    const handleReenterPw = event => {
        const { value } = event.target;
        setReenterPw(value);
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
        };
        if (password !== reenterPw) {
            handlePasswordErr();
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData.email, userData.password);

    };

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password) {
        console.log("signupuser function", email, password);

        $.post("/api/signup", {
            email: email,
            password: password,
            username: email
        })
            .then(function (data) {
                console.log(data);
                
                window.location.replace("/login");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    //function handles login errors
    function handleLoginErr(err) {
        console.log("error with login", err)
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }

    //function handles mismatched password errors
    function handlePasswordErr(err) {
        $("#alert .msg").text("Passwords don't match!");
        $("#alert").fadeIn(500);
    }


    return (
        <Container id="signinbody">
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
                                    onChange={handlePassChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Re-Enter Password</label>
                                <input type="password" className="form-control" id="password-input" placeholder="Password"
                                    onChange={handleReenterPw} />
                            </div>
                            <div style={{ display: "none" }} id="alert" className="alert alert-danger" role="alert">
                                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                <span className="sr-only">Error:</span> <span className="msg"></span>
                            </div>
                            <button type="submit" className="btn btn-success">Sign Up</button>
                        </form>
                        <p>Or login <a href="/login">here</a></p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Signup;
