import React from 'react'
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormFeedback,
    FormGroup,
    FormText,
    Input,
    Label,
    Row,
  } from 'reactstrap';
  import { Link } from "react-router-dom";

function DepoCreationForm() {
    return (
        <div className="container">
            <Form>
            <FormGroup>
                  <Label for="deponame">Depo Name</Label>
                  <Input
                    type="text"
                    name="deponame"
                    placeholder="Enter the Depo Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="depocode">Depo Code</Label>
                  <Input
                    type="text"
                    name="depocode"
                    placeholder="Enter the Depo Code"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="depodescription">Depo Description</Label>
                  <Input
                    type="text"
                    name="depodescription"
                    placeholder="Enter the Depo Description"
                  />
                </FormGroup>
                <div className="row">
          <div className="col-md-2">
            <Link to="/customerdepopage"><buttton className="btn btn-primary">Back</buttton></Link>
          </div>
          <div className="offset-8 col-md-2">
           
          <button type="submit" className="btn btn-primary" style={{float : "right"}} >Create</button>
         
          </div>
        </div>
            </Form>

        </div>
    )
}

export default DepoCreationForm
