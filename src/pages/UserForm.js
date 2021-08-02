import React, { useState } from 'react'
// import './DepoUserForm.css'
import querystring from 'querystring';
import axios from 'axios';
import { Link } from "react-router-dom";
import {
  UncontrolledAlert,
} from 'reactstrap';
import { useStateValue } from '../components/utility/stateProvider';

function UserForm(props) {

  const[success, setSuccess]=useState("")
  const[iserror, setIsError]=useState("")
  const[isconnerror, setIsConnError]=useState("")
  const[usertype, setUsertype]=useState("depouser")
  const[username, setUsername]=useState("")
  const[userfname, setUserFName]=useState("")
  const[userlname, setUserLName]=useState("")
  const[useremail, setUserEmail]=useState("")
  const[usermblno, setUserMblNo]=useState("")
  const[userpass, setUserPass]=useState("")
  const[custname, setCustName]=useState("")
  const[usercustname, setUserCustName]=useState("")



  const userformSubmitHandler = (e) => {
    e.preventDefault();
    if (usertype === "" || username === "" || userfname === "" || userlname === "" || useremail === "" || usermblno === "" || userpass === "" || custname === "" || usercustname === ""){
      setIsError("errors");
      return;
    }else{
   
    axios.post("http://18.134.0.153:3200/user/register", querystring.stringify({
      usertype : usertype,
    username: username,
    userfname : userfname,
    userlname : userlname,
    useremail : useremail,
    usermobno : usermblno,
    password : userpass,
    custname : custname,
    usercustname : usercustname,
    deponame : "Chennai",
    role : "superadmin"
}), {
headers: { 
  "Content-Type": "application/x-www-form-urlencoded"
}
}).then((data) => {
  // setLoadedData(data.data.results);
  console.log("aaaaaaaaaaaaaaaa");
  console.log(data);
  alert("User Registered Successful")
  setSuccess("success");
  props.history.push("/users");
    }).catch((error) => {
      setIsConnError("errors");
        console.log("erorrr")
    })
  }        
}      

  const ErrorMessage = (
    <UncontrolledAlert color="danger">
        Please enter all the fields
    </UncontrolledAlert>
  )

  const ConnErrorMessage = (
    <UncontrolledAlert color="danger">
       Connection Failed, Please Try Again Later
    </UncontrolledAlert>
  )

  const SuccessMessage = (
    <UncontrolledAlert color="danger">
       User Registered Successful
    </UncontrolledAlert>
  )


    return (
        <div className="container">
          
              <form>
                <div className="form-group">
                <label htmlFor="usertype">Usertype :</label>
                  <div className="col-6">
                    <input type="radio" id="depoUser" name="depoUser" value="depouser" onChange={(e) => setUsertype(e.target.value)}/>
                     <label htmlFor="depoUser">Depo User</label>
                  </div>
                  <div className="col-6">
                    <input type="radio" id="depoSurveyor" name="depoSurveyor" value="deposurveyor" onChange={(e) => setUsertype(e.target.value)}/>
                     <label htmlFor="depoSurveyor">Depo Surveyor</label>
                  </div>
                </div>
    <div className="form-group">
      <label htmlFor="username">Username:</label>
      <input type="text" className="form-control" id="username" placeholder="Enter Username" name="username" onChange={(e) => setUsername(e.target.value)} />
    </div>
    <div className="form-group">
      <label htmlFor="userfname">User Firstname:</label>
      <input type="text" className="form-control" id="userfname" placeholder="Enter User Firstname" name="userfname" onChange={(e) => setUserFName(e.target.value)}/>
    </div>
    <div className="form-group">
      <label htmlFor="userlname">User Lastname:</label>
      <input type="text" className="form-control" id="userlname" placeholder="Enter User Lastname" name="userlname" onChange={(e) => setUserLName(e.target.value)}/>
    </div>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" className="form-control" id="email" placeholder="Enter E-mail" name="email" onChange={(e) => setUserEmail(e.target.value)}/>
    </div>
    <div className="form-group">
      <label htmlFor="mblnumber">User Mobilenumber:</label>
      <input type="number" className="form-control" id="mblnumber" placeholder="Enter User Mobilenumber" name="mblnumber" onChange={(e) => setUserMblNo(e.target.value)}/>
    </div>
    <div className="form-group">
      <label htmlFor="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={(e) => setUserPass(e.target.value)}/>
    </div>
    <div className="form-group">
      <label htmlFor="custname">Customer Name:</label>
      <input type="text" className="form-control" id="custname" placeholder="Enter Customer Name" name="custname" onChange={(e) => setCustName(e.target.value)}/>
    </div>
    <div className="form-group">
      <label htmlFor="usercustname">User Customername:</label>
      <input type="text" className="form-control" id="usercustname" placeholder="Enter User Customername" name="usercustname" onChange={(e) => setUserCustName(e.target.value)}/>
    </div><br/>
    <div className="form-group mb-3 text-center">
                  {iserror !== "" ? ErrorMessage : null}</div>
      <div className="form-group mb-3 text-center">
                  {isconnerror !== "" ? ConnErrorMessage : null}</div>
    <div className="form-group mb-3 text-center">
                  {success !== "" ? SuccessMessage : null}</div>
                  <div className="row">
          <div className="col-md-2">
            <Link to="/users"><buttton className="btn btn-primary">Back</buttton></Link>
          </div>
          <div className="offset-8 col-md-2">
           
          <button type="submit" className="btn btn-primary" style={{float : "right"}} onClick={userformSubmitHandler}>Submit</button>
         
          </div>
        </div>
    
  </form>
  
        </div>
    )
}

export default UserForm
