
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css';

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [addressError, setAddressError] = useState("");
  const navigate = useNavigate();
 
    
  
  

  const handleSubmit = event => {
    event.preventDefault();
    let hasError = false;
    if (!username) {
      setUsernameError("Please enter a username");
      hasError = true;
    } else {
      setUsernameError("");
    }
    if (!email) {
      setEmailError("Please enter an email");
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    } else {
      setEmailError("");
    }
    
    if (!password) {
      setPasswordError("Please enter a password");
      hasError = true;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      hasError = true;
    } else {
      setPasswordError("");
    }
    
    if (!phoneNumber || phoneNumber.length !== 10) {
      setPhoneNumberError("Please enter a 10-digit phone number");
      hasError = true;
    } else {
      setPhoneNumberError("");
    }
    if (!address) {
      setAddressError("Please enter an address");
      hasError = true;
    } else {
      setAddressError("");
    }
    if (!hasError) {
      
      navigate('/Login');
    }
  };
  function newFunc() {
    navigate('/Login')
  }

  return (
    
      <div>
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-lg-6 col-md-6 col-sm-4">
              <div className="card shadow">
                <div className="card-title text-center border-bottom">
                  <h2 className="p-3">SignUp</h2>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                      />
                      {usernameError && <p className="error">{usernameError}</p>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                      {emailError && <p className="error">{emailError}</p>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                      {passwordError && <p className="error">{passwordError}</p>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="phonenumber" className="form-label">
                        phoneNumber
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="phonenumber"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                      />
                      {phoneNumberError && <p className="error">{phoneNumberError}</p>}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <textarea
                        type="text"
                        id="address"
                        className="form-control"
                        placeholder="Address"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                      />
                      {addressError && <p className="error">{addressError}</p>}
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn text-light main-bg">
                        submit
                      </button><br/>
                      <p className="text"> Already have An Account?
                        <a className="forgot text-muted ms-4" href=" " onClick={newFunc}>
                          Login
                        </a>
                      </p>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}
export default Signup;