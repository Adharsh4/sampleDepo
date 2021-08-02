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

function CustomerForm() {
    return (
        <div>
            <Form>
            <FormGroup>
                  <Label for="customername">Customer Name</Label>
                  <Input
                    type="text"
                    name="customername"
                    placeholder="Enter the Customer Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="mobilenumber">Mobile Number</Label>
                  <Input
                    type="number"
                    name="mobilenumber"
                    placeholder="Enter the Mobile Number"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter the E-mail"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="contactperson">Contact Person</Label>
                  <Input
                    type="text"
                    name="contactperson"
                    placeholder="Enter the Contact Person"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input
                    type="text"
                    name="address"
                    placeholder="Enter the Address"
                  />
                </FormGroup>
                <div className="row">
          <div className="col-md-2">
            <Link to="/customerpage"><buttton className="btn btn-primary">Back</buttton></Link>
          </div>
          <div className="offset-8 col-md-2">
           
          <button type="submit" className="btn btn-primary" style={{float : "right"}} onClick={userformSubmitHandler}>Submit</button>
         
          </div>
        </div>
            </Form>

        </div>
    )
}

export default CustomerForm
