import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

function Login() {
  const navigate = useNavigate();

  const [id, setId]= useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState('');
  const [message, setMessage] = useState('');



  const handleSubmit = (event) => {
    event.preventDefault();
    // const employee = {
    //   email: email,
    //   password: password,
    // };
    
    console.log({email, password})
    axios.post('https://reqres.in/api/login', 
    {
      email: email,
      password: password,
    })
      .then(result => {
        // setMessage(result.data.message);  
        console.log(result.data);
        setEmail('');
        setPassword('');
        // alert("Success")
        localStorage.setItem('token', result.data.token)
        navigate("/Home")
      })
      .catch(error => {
        alert("not valid")
        console.log(error)
        // setMessage(error.result.data.message);
      });
  };

  return (
    <div className="wrapper">
    <div className="container main">
        <div className="row">
            <div className="col-md-6 side-image">
               
                
                <div className="text">
                   
                </div>
            </div>
            <div className="col-md-6 right">
                 <div className="input-box">
                    <header>Login Page</header>
                    <form>
                    <div className="input-field">
                        <input type="email" className="input"  value={email} onChange={(event) => setEmail(event.target.value)} />
                        <label for="email">Email</label>
                    </div>
                    <div className="input-field">
                        
                        <input type="password" className="input" value={password} onChange={(event) => setPassword(event.target.value)} />
                        <label for="password">Password</label>
                    </div>
                    <div class="input-field">
                        <input onClick={handleSubmit} type="submit" className="submit" value="Login"/>
                        
                    </div>
                    <div className="signin">
                        <span> <Link to="/ForgotPass" style={{ color: "#8c7569" }}> 
                    Forgot Password
                  </Link></span>
                    </div>
                    </form>
                 </div>
                    <p style={{color:"white"}}>{message}</p>
            </div>
        </div>
    </div>
</div>
  );
}

export default Login;