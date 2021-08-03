import React from 'react'
import { useState } from "react";
import './RegisterPage.css';
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import querystring from "querystring";
import portImage from "./portbg.jpg";


function RegisterPage(props) {

    // const history = useHistory();

    const [customername, setCustomerName] = useState("");
    const [customeremail, setCustomerEmail] = useState("");
    const [password, setPassword] = useState("");
    const [customermblno, setCustomerMblno] = useState("");
    const [username, setUserName] = useState("");
  
    const handleSignUp = (e) => {
      e.preventDefault();
      axios
        .post(
          "http://18.134.0.153:3200/user/register",
          querystring.stringify({
            usertype: "customer",
            role : "superadmin",
            custname : customername,
            custusername : username,
            custmobno : customermblno,
            custemail: customeremail,
            password: password,
            custadd : "Chennai",
            custcity : "Chennai",
            custstate : "Tamilnadu",
            custcountry : "India",
            custlat : "13.067439",
            custlon : "80.237617",
            depocode : "CHA_TRI"
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((data) => {
          console.log(data);
          alert("Customer created succesfully.")
          props.history.push("/");
        })
        .catch(() => {
          alert("Username and Email already exist");
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
                  <input type="text" class="form-control" placeholder="Customer Name" autocomplete="customername" required onChange={(e) => setCustomerName(e.target.value)}/>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                  </div>
                  <input type="text" class="form-control" placeholder="Customer Email" autocomplete="customeremail" required onChange={(e) => setCustomerEmail(e.target.value)}/>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="bx bx-phone"></i></span>
                  </div>
                  <input type="text" class="form-control" placeholder="Customer Mobilenumber" autocomplete="customermblnumber" required onChange={(e) => setCustomerMblno(e.target.value)}/>
                </div>
                <div class="input-group mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="bx bx-user-circle"></i></span>
                  </div>
                  <input type="text" class="form-control" placeholder="Username" autocomplete="username" required onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="bx bx-lock"></i></span>
                  </div>
                  <input type="password" class="form-control" placeholder="Password" autocomplete="new-password" required onChange={(e) => setPassword(e.target.value)}/>
                </div>
             
               <button type="button" class="btn btn-block btn-success" onClick={handleSignUp}>Create Account</button>
               <div className="text-center mt-3">
               <Link to='/'>
                      <button type="button" className="btn btn-link">If you have already regsitered. Please Sign in</button></Link></div>
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
