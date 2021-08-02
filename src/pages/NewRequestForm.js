import React, { Component, useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './CustomerRequest.css'
import { Link } from "react-router-dom";
import axios from "axios";
import querystring from 'querystring';
import { useStateValue } from '../components/utility/stateProvider';
import {actionTypes} from '../components/utility/reducer';

function NewRequestForm(props) {

    const [{}, dispatch] = useStateValue();

     const [deponame,setDeponame] = useState("Chennai");
     const [containerno,setContainerNo] = useState("IND_MAA_CONT_001");
     const [purpose,setPurpose] = useState("Estimate / Inspection");

     const checkRequest = (e) => {
          e.preventDefault();
          axios
            .post(
              "http://18.134.0.153:3200/container/customerRequest",
              querystring.stringify({
               deponame: deponame,
               containerno: containerno,
               containerpurpose: purpose
              }),
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              }
            )
            .then((data) => {
              // setLoadedData(data.data.results);
              console.log(data);
              
              props.history.push("/customerrequest");
          //     alert(data.data.message)
              
            })
            .catch(() => {
              console.log("errorrrrrrrr")
            });
        };


    return (
        <div className="container">
        <h2 className="text-center">New Request Container Form</h2>
        <Form>
        <FormGroup>
         <Label for="deponame">Depo Name</Label>
             <Input type="select"t name="deponame" id="deponame"  onChange={(e) => setDeponame(e.target.value)} >
                  <option disabled>Please Select the Depo Name</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Banglore">Banglore</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Pune">Pune</option>
             </Input>
        </FormGroup>
        <FormGroup>
         <Label for="containerno">Container Number</Label>
             <Input type="select" name="containerno" id="containerno"  onChange={(e) => setContainerNo(e.target.value)} >
                  <option disabled>Please Select the Container No</option>
                  <option value="IND_MAA_CONT_001">IND_MAA_CONT_001</option>
                  <option value="IND_MAA_CONT_002">IND_MAA_CONT_002</option>
             </Input>
        </FormGroup>
        <FormGroup>
            <Label for="purpose">Purpose</Label>
             <Input type="select" name="purpose" id="purpose"  onChange={(e) => setPurpose(e.target.value)}>
                  <option disabled>Please Select the Purpose</option>
                  <option value="Estimate / Inspection">Estimate / Inspection</option>
                  <option value="Pre-Repair Survey">Pre-Repair Survey</option>
                  <option value="Post-Repair Survey">Post-Repair Survey</option>
                  <option value="Onhire Survey">Onhire Survey</option>
                  <option value="Offhire Survey">Offhire Survey</option>
                  <option value="Sale conition">Sale conition</option>
                  <option value="General / Other">General / Other</option>
             </Input>
        </FormGroup>
        <div className="buttons">
        <Link to={'/customerrequest'}><Button color="primary" style={{float : 'left'}}>Back</Button>{' '}</Link>
        <Button color="primary" style={{float : 'right'}} onClick={(e) => checkRequest(e)}>Submit</Button>{' '}
        </div>
        </Form>
    </div>
    )
}

export default NewRequestForm

