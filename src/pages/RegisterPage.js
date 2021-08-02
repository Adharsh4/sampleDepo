import React from 'react'
import { useState } from "react";
import './RegisterPage.css';
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import querystring from "querystring";
import portImage from "./portbg.jpg";


function RegisterPage(props) {

    // const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("depoUser");
    const [isRegister, setIsRegister] = useState(false);
  
    const handleSignIn = (e) => {
      e.preventDefault();
      axios
        .post(
          "http://18.134.0.153:3200/user/login",
          querystring.stringify({
            usertype: userType,
            custemail: email,
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
          props.history.push("/home");
        })
        .catch(() => {
          console.log("error");
        });
    };
  
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
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="bx bx-user"></i></span>
                  </div>
                  <input type="text" class="form-control" placeholder="Customer Name" autocomplete="customername" required/>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                  </div>
                  <input type="text" class="form-control" placeholder="Customer Email" autocomplete="customeremail" required/>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="bx bx-phone"></i></span>
                  </div>
                  <input type="text" class="form-control" placeholder="Customer Mobilenumber" autocomplete="customermblnumber" required/>
                </div>
                <div class="input-group mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="bx bx-user-circle"></i></span>
                  </div>
                  <input type="text" class="form-control" placeholder="Username" autocomplete="username" required/>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="bx bx-lock"></i></span>
                  </div>
                  <input type="password" class="form-control" placeholder="Password" autocomplete="new-password" required/>
                </div>
             
                <Link to="/login"><button type="button" class="btn btn-block btn-success">Create Account</button></Link>
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

export default RegisterPage
