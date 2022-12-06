import React, { useState } from  'react';
// Creating the different parts of the userform
const UserForm = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ cpassword, setConfirmPassword ] = useState("");
    const [ firstNameError, setFirstNameError ] = useState("");
    const [ lastNameError, setLastNameError ] = useState("");
    const [ emailError, setEmailError ] = useState("");
    const [ passwordError, setPasswordError ] = useState("");
    const [ cpasswordError, setConfirmPasswordError ] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1 ) {
            setFirstNameError("First name field is required.");
        } else if(e.target.value.length< 2) {
            setFirstNameError("First name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1){
            setLastNameError("Last name field is required.");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters.");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1 ) {
            setEmailError("Email field is required.")
        } else if (e.target.value.length < 2) {
            setEmailError("Email must be at least 2 characters.");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1 ) {
            setPasswordError("Password field is required.");
        } else if (e.target.value.length < 6) {
            setPasswordError("Password must be at least 6 characters.");
        } else {
            setPasswordError("");
        }
    }

    const handlePasswordConfirm = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value === password ) {
            setConfirmPasswordError("");
        } else {
            setConfirmPasswordError("Passwords must match!");
        }
    }
    
    return(
    <div class="container">
        <h1>Enter Your Info Here</h1>    
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={ handleFirstName } />
                {
                    firstNameError ?
                    <p>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ handleLastName } />
                {
                    lastNameError ?
                    <p>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" value={email} onChange={ handleEmail } />
                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ handlePassword } />
                {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={cpassword} onChange={ handlePasswordConfirm } />
                {
                    cpasswordError ?
                    <p>{ cpasswordError }</p> :
                    ''
                }
            </div>
        </form>
        <div>
            <h1>Your Form Data</h1>
            <p>
                <label>First Name: </label>{ firstName }
            </p>
            <p>
                <label>Last Name: </label>{ lastName }
            </p>
            <p>
                <label>Email: </label>{ email }
            </p>
            <p>
                <label>Password: </label>{ password }
            </p>
            <p>
                <label>Confirm Password: </label>{ cpassword }
            </p>
        </div>
    </div>
    );
};
    
export default UserForm;
