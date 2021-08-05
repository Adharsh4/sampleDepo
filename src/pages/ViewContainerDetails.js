import React, { Component, useEffect, useState } from "react";

import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link } from "react-router-dom";
import axios from "axios";
import querystring from 'querystring';
import { useStateValue } from '../components/utility/stateProvider';
import {actionTypes} from '../components/utility/reducer';
import { Alert } from 'reactstrap';
import {
  UncontrolledAlert,
} from 'reactstrap';
  

const ViewContainerDetails = (props) => {
    const [{ results }, dispatch] = useStateValue();  
  const[result,setResults]=useState('')
  const[success, setSuccess]=useState("")
  const[iserror, setIsError]=useState("")
  const[isconnerror, setIsConnError]=useState("")
//   const [{ user_token }, dispatch] = useStateValue();
  const [depocode, setDepocode] = useState("");
  const [deponame, setDeponame] = useState("");
  const [containerno, setContainerno] = useState("");
  const [containerrefno, setContainerRefNo] = useState("");
  const [containersize, setContainerSize] = useState("");
  const [containerweight, setContainerWeight] = useState("");
  const [containerpurpose, setContainerPurpose] = useState("");
  const [containerasstowner, setContainerAsstOwner] = useState("");
  const [custname, setCustName] = useState("");
  const [containermandate, setContainerManDate] = useState("");
  const [containerstatus, setContainerStatus] = useState("active");
  const [userToken, setUserToken] = useState(
    localStorage.getItem('user_token'),
  );

 
  // const handleChange = (e) => {
    
  //   // setState({ [e.target.name]: e.target.value });
  //   setContainerno(e.target.value);
  //   setContainerRefNo(e.target.value);
  //   setContainerSize(e.target.value);
  //   setContainerWeight(e.target.value);
  //   setContainerPurpose(e.target.value);
  //   setContainerAsstOwner(e.target.value);
  //   setCustName(e.target.value);
    
  //   setContainerStatus(e.target.value);
  // };
  // const handleDate = (e) => {
  //   setContainerManDate(e.target.value);
  // }


  useEffect(() => {
    check();
  }, []);

  const check = e => {
    // e.preventDefault();
    // if (depocode === "" || containerno === "" || containerrefno === "" || containersize === "" || containerweight === "" || containerpurpose === "" || containerasstowner === "" || containermandate === ""|| containerstatus === ""){
    //   setIsError("errors");
    //   return;
    // }else{
    axios
      .post(
        "http://18.134.0.153:3200/container/getcontainerdatabycontainernoadmin",
        querystring.stringify({
        //   deponame: "Chennai",
        //   containernumber: containerno,
        //   containerrefno: containerrefno,
        //   containersize: containersize,
        //   containerweight: containerweight,
        //   containerpurpose: containerpurpose,
        //   containerassetowner: containerasstowner,
        //   containermanufacturedate: containermandate,    
        //   containerstatus: "",
        //   depocode: depocode  
            containerno : props.location.state.containerNo
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            sessiontoken: userToken,
          },
        }
      )
      .then((data) => {
        // setLoadedData(data.data.results);
        console.log(data);
        console.log(data.data.results[0])
        let dataresult = data;
        // setResults(data);
        dispatch({
          type: actionTypes.SET_DETAILS,
          results: data.data.results[0]
        })
        // setSuccess("success");
        // alert(data.data.message)
        // props.history.push("/containers");
        
      })
      .catch(() => {
        setIsConnError("errors");
        console.log("errorrrrrrrr")
      });
  ;}


  const checkAccept = (e, container_no) => {
    e.preventDefault();
    axios
      .post(
        'http://18.134.0.153:3200/container/containerrequestaccept',
        querystring.stringify({
          containerno: props.location.state.containerNo,
          username: localStorage.getItem("userName"),
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            sessiontoken: userToken,
          },
        },
      )
      .then(data => {
        // setLoadedData(data.data.results);
        console.log('xxxx');
        console.log(data);
        DepoCustomerHandler();
        props.history.push('/containerrequest')
        //     alert(data.data.message)
      })
      .catch(() => {
        console.log('errorrrrrrrr');
      });
  };

  const DepoCustomerHandler = e => {
    axios
      .post(
        'http://18.134.0.153:3200/container/getnewcontainerrequest',
        querystring.stringify({
          username: localStorage.getItem('userName'),
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            sessiontoken: userToken,
          },
        },
      )
      .then(data => {
        console.log('sandeep');
        console.log(data);
        //if(data.data.results.length != containers.length){
        console.log('sandeep1');
        dispatch({
          type: actionTypes.SET_REQUESTS,
          requests: data.data.containers,
        });
        //}
        // setLoadedData(data.data.results);
      })
      .catch(() => {
        console.log('errorrr');
      });
  };


  console.log("aaa");
  console.log(props.location.state.containerNo);
  console.log(props.location.state.userName);
  console.log("aaa" + results.id)
  // deponame: "Chennai",
  const handleNext = () => {
    // if ( containerno === "" || containerrefno === "" || containersize === "" || containerweight === "" || containerpurpose === "" || containerasstowner === "" || containermandate === ""){
    //   setIsError("errors");
    //   return;
    // }
    props.history.push("/containerphotoupload", {
      containernumber: containerno,
      containerrefno: containerrefno,
      containersize: containersize,
      containerweight: containerweight,
      containerpurpose: containerpurpose,
      containerassetowner: containerasstowner,
      containermanufacturedate: containermandate,    
      containerstatus: "active",
      depocode: localStorage.getItem("depocode")

    });
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
       Containers Created Successful
    </UncontrolledAlert>
  )


  
    // /const to={
    //   pathname: `/containerformPhoto/${deponame}`,
    //   param: {deponame: deponame, containerno: containerno}
    // }
    let modalContent = (
      <div className="container">
      <form>
        <div className="row">
          <h5 className="col-md-3">Container Details</h5>
        </div>
        <br />
        <div class="row form-group">
          <div className="col-md-3">
            <label for="depocode">Depo Code :</label>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              id="depocode"
              placeholder="Enter Depo Name"
              name="depocode"
              value = {results.depo_code}
              disabled
              // onChange={(e) => setDepocode(e.target.value)}
            />
          </div>
        </div>
        <div class="row form-group">
          <div className="col-md-3">
            <label for="deponame">Depo Name :</label>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              id="deponame"
              placeholder="Enter Depo Name"
              name="deponame"
              value={results.depo_code}
              disabled
            //   onChange={(e) => setDeponame(e.target.value)}
            />
          </div>
        </div>
        <div class="row form-group">
          <div className="col-md-3">
            <label for="containerno">Container Number :</label>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              id="containerno"
              placeholder="Enter Container Number"
              name="containerno"
              value={results.container_no}
              disabled
            //   onChange={(e) => setContainerno(e.target.value)}
            />
          </div>
        </div>
        <div class="row form-group">
          <div className="col-md-3">
            <label for="containerrefno">Container Ref No :</label>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              id="containerrefno"
              placeholder="Enter Container Ref No"
              name="containerrefno"
              value={results.container_refno}
              disabled
            //   onChange={(e) => setContainerRefNo(e.target.value)}
            />
          </div>
        </div>
        <div class="row form-group">
          <div className="col-md-3">
            <label for="containersize">Container Size :</label>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              id="containersize"
              placeholder="Enter Container Size"
              name="containersize"
              value={results.container_size}
              disabled
            //   onChange={(e) => setContainerSize(e.target.value)}
            />
          </div>
        </div>
        <div class="row form-group">
          <div className="col-md-3">
            <label for="containerweight">Container Weight :</label>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              id="containerweight"
              placeholder="Enter Container Weight"
              name="containerweight"
              value={results.container_weight}
              disabled
            //   onChange={(e) =>  setContainerWeight(e.target.value)}
            />
          </div>
        </div>
        <div class="row form-group">
          <div className="col-md-3">
            <label for="containerpurpose">Container Purpose :</label>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              id="containerpurpose"
              placeholder="Enter Container Purpose"
              name="containerpurpose"
              value={results.container_purpose}
              disabled
            //   onChange={(e) => setContainerPurpose(e.target.value)}
            />
          </div>
        </div>
        <div class="row form-group">
          <div className="col-md-3">
            <label for="containerasstowner">Container Asset Owner :</label>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              id="containerasstowner"
              placeholder="Enter Container Asset Owner"
              name="containerasstowner"
              value={results.container_asset_owner}
              disabled
            //   onChange={(e) => setContainerAsstOwner(e.target.value)}
            />
          </div>
        </div>
        {/* <div class="row form-group">
          <div className="col-md-3">
            <label for="custname">Customer Name :</label>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              id="custname"
              placeholder="Enter Customer Name"
              name="custname"
              onChange={(e) => setCustName(e.target.value)}
            />
          </div>
        </div> */}
        <div class="row form-group">
          <div className="col-md-3">
            <label for="containermandate">Container Manufacture Date :</label>
          </div>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              id="containermandate"
            //   placeholder="Enter Container Manufacture Date"
              name="containermandate"
              value={results.container_manufactuer_date}
              disabled
            //   onChange={(e) => setContainerManDate(e.target.value)}
            />
          </div>
        </div>
        {/* <div class="row form-group">
          <div className="col-md-3">
            <label for=""active"">Container Status :</label>
          </div>
          <div className="col-md-9">
            <select
              class="form-control"
              id="containerstatus"
              onChange={(e) => setContainerStatus(e.target.value)}
              name="containerstatus"
            >
              <option disabled>Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div><br/> */}

        <div className="form-group mb-3 text-center">
                  {iserror !== "" ? ErrorMessage : null}</div>
      <div className="form-group mb-3 text-center">
                  {isconnerror !== "" ? ConnErrorMessage : null}</div>
    <div className="form-group mb-3 text-center">
                  {success !== "" ? SuccessMessage : null}</div>

        <div className="row">
          <div className="col-md-2">
            <Link to="/containerrequest"><buttton className="btn btn-primary">Back</buttton></Link>
          </div>
          <div className="offset-8 col-md-2">
           
              <button className="btn btn-primary" onClick={e =>
                                        checkAccept(
                                          e,
                                          props.location.state.containerNo
                                        )
                                      } style={{float : "right"}}>
                Accept
              </button>
         
          </div>
        </div>
        <br />
      </form>
      </div>
    );

    return <div className="container-form">{modalContent}</div>;
  
}

export default ViewContainerDetails;

// export const Containerform = (props) => {

//   );

//   return
// };

// export default Containerform;

{
  /* <div className="row">
    <div className="col-md-6">
      <div className="checkbox inline">
        <label>
          <input type="checkbox" value="" /> Interior Status
        </label>
      </div>
    </div>
    <div className="col-md-6">
      <div className="checkbox outline">
        <label>
          <input type="checkbox" value="" /> Exterior Status
        </label>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="checkbox inline">
        <label>
          <input type="checkbox" value="" /> Interior Front
        </label>
      </div>
    </div>
    <div className="col-md-6">
      <div className="checkbox outline">
        <label>
          <input type="checkbox" value="" /> Exterior Front
        </label>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="checkbox inline">
        <label>
          <input type="checkbox" value="" /> Interior Doors
        </label>
      </div>
    </div>
    <div className="col-md-6">
      <div className="checkbox outline">
        <label>
          <input type="checkbox" value="" /> Exterior Doors
        </label>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="checkbox inline">
        <label>
          <input type="checkbox" value="" /> Interior Roof
        </label>
      </div>
    </div>
    <div className="col-md-6">
      <div className="checkbox outline">
        <label>
          <input type="checkbox" value="" /> Exterior Roof
        </label>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="checkbox inline">
        <label>
          <input type="checkbox" value="" /> Interior Floor
        </label>
      </div>
    </div>
    <div className="col-md-6">
      <div className="checkbox outline">
        <label>
          <input type="checkbox" value="" /> Exterior Floor
        </label>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-6">
      <div className="checkbox inline">
        <label>
          <input type="checkbox" value="" /> Interior Left
        </label>
      </div>
    </div>
    <div className="col-md-6">
      <div className="checkbox outline">
        <label>
          <input type="checkbox" value="" /> Exterior Left
        </label>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="checkbox inline">
        <label>
          <input type="checkbox" value="" /> Interior Right
        </label>
      </div>
    </div>
    <div className="col-md-6">
      <div className="checkbox outline">
        <label>
          <input type="checkbox" value="" /> Exterior Right
        </label>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="checkbox inline">
        <label>
          <input type="checkbox" value="" /> Interior Machinery
        </label>
      </div>
    </div>
    <div className="col-md-6">
      <div className="checkbox outline">
        <label>
          <input type="checkbox" value="" /> Interior CSC Plate
        </label>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="checkbox inline">
        <label>
          <input type="checkbox" value="" /> Interior Others
        </label>
      </div>
    </div>
  </div> */
}
