import React, { Component, useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './CustomerRequest.css'
import { Link } from "react-router-dom";
import axios from "axios";
import querystring from 'querystring';
import { useStateValue } from '../components/utility/stateProvider';
import {actionTypes} from '../components/utility/reducer';


function NewRequestForm(props) {

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [userToken, setUserToken] = useState(localStorage.getItem("user_token"))
    const [{}, dispatch] = useStateValue();

     const [depocode,setDepocode] = useState("");
     const [containerno,setContainerNo] = useState("");
     const [purpose,setPurpose] = useState("Estimate / Inspection");

     const checkRequest = (e) => {
       e.preventDefault();
       setModal(!modal)
           axios
            .post(
              "http://18.134.0.153:3200/container/customerrequestforcontainerinfo",
              querystring.stringify({
                depocode : depocode,
               containerno: containerno,
               containerpurpose: purpose
              }),
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "sessiontoken": userToken
                },
              }
            )
            .then((data) => {
              // setLoadedData(data.data.results);
              console.log(data);
              
              // props.history.push("/customerrequest");
          //     alert(data.data.message)
              
            })
            .catch(() => {
              console.log("errorrrrrrrr")
            });
        };


        const sendRequest = (e) => {
          e.preventDefault();
          setModal(!modal)
              axios
               .post(
                 "http://18.134.0.153:3200/container/customerreqestforcontainer",
                 querystring.stringify({
                  username : localStorage.getItem("userName"),
                  containerno: containerno,
                  depocode: depocode,
                  containerpurpose: purpose
                 }),
                 {
                   headers: {
                     "Content-Type": "application/x-www-form-urlencoded",
                     "sessiontoken": userToken
                   },
                 }
               )
               .then((data) => {
                 // setLoadedData(data.data.results);
                 console.log(data);
                 if(data.data.message === "request for container successfully sent to depo"){
                  props.history.push("/customerrequest");
                  alert(data.data.message)
                 } else {
                  alert(data.data.message)
                 }
                //  props.history.push("/customerrequest");
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
         <Label for="deponame">Depo Code</Label>
             <Input type="text" name="deponame" id="deponame"  onChange={(e) => setDepocode(e.target.value)} >
            
             </Input>
        </FormGroup>
        <FormGroup>
         <Label for="containerno">Container Number</Label>
             <Input type="text" name="containerno" id="containerno"  onChange={(e) => setContainerNo(e.target.value)} >
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
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Request Confirmation</ModalHeader>
        <ModalBody>
         Container Number : {containerno}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(e) => sendRequest(e)}>Send Request</Button>{' '}
        </ModalFooter>
      </Modal>
        </div>
        </Form>

    </div>
    )
}

export default NewRequestForm

