import React from 'react'
import { useState } from "react";
import "./LoginPage.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import querystring from "querystring";
import portImage from "./portbg.jpg";
import { useStateValue } from '../components/utility/stateProvider';
import { actionTypes } from '../components/utility/reducer';
import {
  UncontrolledAlert,
} from 'reactstrap';

function LoginPage(props) {


    // const history = useHistory();
    const [{}, dispatch] = useStateValue();
  const [isError, setIsError] = useState("");
  const [isErrors, setIsErrors] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [userType, setUserType] = useState("depoUser");
    const [isRegister, setIsRegister] = useState(false);
  
    const handleSignIn = (e) => {
      if(email === "" || password === ""){
        // alert("Please enter all fields");
        setIsErrors("errors");
        return;
      }
      e.preventDefault();
      dispatch({
        type: actionTypes.SET_EMAIL,
        email: email
      })
      axios
        .post(
          "http://18.134.0.153:3200/user/login",
          querystring.stringify({
            useremail: email,
            password: password,
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((data) => {
          console.log(data);
          localStorage.setItem("user_token", data.data.sessionToken);
          localStorage.setItem("expiresIn", 3600);
          dispatch({
            type: actionTypes.SET_USER_TOKEN,
            user_token: data.data.sessionToken
          })
          if(data.data.message === "user name or password does not match"){
            setIsError("error");
          }else{
          console.log(data)
          props.history.push("/home");
          }
        })
        .catch(() => {  
          setIsError("error");
          console.log("error");
          // props.history.push("/");
        });
    };

    const alertMessage = (
      <UncontrolledAlert color="danger">
          Please Enter Correct Email and Password
      </UncontrolledAlert>
    )

    
    const alertMessages = (
      <UncontrolledAlert color="danger">
         Please Enter All The Fields
      </UncontrolledAlert>
    )

    
  
    const handleRegister = (e) => {
      props.history.push("/register");
    };
  
    return (
        <React.Fragment>
        <div>
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
              />
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
              />
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
            </div>
            <div className="container-fluid full-size no-scroll no-gutters">
  <div className="row no-scroll no-gutters">
    <div className="col-lg-6">
      <img className="bg-image" src={portImage}/>
    </div>
    <div className="col-lg-6">
    <div className="card-group mx-auto">
            <div className="card p-4 card-radious">
              <div className="card-body">
                <form>
                  <h1>Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="bx bx-user"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" autocomplete="username" required onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="input-group mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text"> <i className="bx bx-lock"></i></span>
                    </div>
                    <input type="password" className="form-control" placeholder="Password" autocomplete="current-password"
                      required onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  {/* <div className="input-group">
                    <select
                        onChange={(e) => setUserType(e.target.value)}
                        class="form-control"
                        id="contstatus"
                      >
                        <option value="depoUser">Depo user</option>
                        <option value="depoSurveyor">Depo Surveyor</option>
                      </select>
                    </div> */}
                  <div className="pass text-right mt-0">
                      <button type="button" className="btn btn-link px-0 text-right">Forgot password?</button>
                    </div>
                    <div className="mt-3 text-center">
                  {isError !== "" ? alertMessage : null}</div>
                  <div className="mt-3 text-center">
                  {isErrors !== "" ? alertMessages : null}</div>

                  <div className="mt-4">
                       <div><p className="text-muted">Depo Admin Login - depoadmin@me.com</p></div>
                       <div><p className="text-muted">Password - test@123</p></div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button  type="button" className="btn btn-primary px-4" onClick={handleSignIn}>Login</button>
                    </div>
                    <div className="col-6">
                        <Link to='/register'>
                      <button type="button" className="btn btn-link ml-2 regsiter ">Not a user? Register here.</button></Link>
                    </div>

                  </div>
             
                </form>
              </div>
            </div>
          </div>
    </div>
  </div>
</div>

</React.Fragment>
    )
}

export default LoginPage
