import React, { Component,useEffect, useState  } from 'react';
import Page from 'components/Page';
import { Link } from "react-router-dom";
import {RiAddCircleFill} from 'react-icons/ri'
import './CustomerRequest.css'
import { Table } from 'reactstrap';
import querystring from 'querystring';
import axios from 'axios';
import { useStateValue } from '../components/utility/stateProvider';
import {actionTypes} from '../components/utility/reducer';


function CustomerRequest() {

  const [{ req }, dispatch] = useStateValue();
  const [userToken, setUserToken] = useState(localStorage.getItem("user_token"))

  const myFunction =() =>{
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }


  useEffect(() => {
    customerHandler();
  }, []);

   
  const customerHandler = e => {
    axios
      .post(
        'http://18.134.0.153:3200/container/requestedcontainerbycustomer',
        querystring.stringify({
          username: localStorage.getItem("userName")
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "sessiontoken": userToken
          },
        },
      )
      .then(data => {
      
        console.log(data)
        //if(data.data.results.length != containers.length){
          console.log("sandeep1");
          dispatch({
            type: actionTypes.SET_CUSTREQUEST,
            req: data.data.containers
          })
        //}
        // setLoadedData(data.data.results);
      })
      .catch(() => {
        console.log("errorrr")
      });
  };
    



  return (
    <div>
        <Page
          className="CustomerRequest"
          title="Customer Request"
          breadcrumbs={[{ name: 'customer request', active: true }]}
        >
          <div className="row">
            <div className="col-md-10">
              <input
                type="text"
                id="myInput"
                onKeyUp={myFunction}
                placeholder="Search for names.."
                title="Type in a name"
              />
            </div>
            
            <div className="col-md-2">
             
                <Link to="/newrequest"><RiAddCircleFill className="icon"/></Link>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-12">
              <Table hover>
                <thead>
                  <tr className="table-header">
                    <th>Depo Name</th>
                    <th>Container No</th>
                    <th>Purpose</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                {req ? req.map(singleData => {

                    return (
                    <tr key ={singleData.containerNo}>
                      <td>{singleData.depoName}</td>
                      <td>{singleData.containerNo}</td>
                      <td>{singleData.purpose} </td>
                      <td>{singleData.status}</td>
                    </tr>)

                    }): null}
                  </tbody>
                {/* <tbody className="text-center">
                  <tr>
                    <td>chennai</td>
                    <td>Container 1</td>
                    <td>Sale condition</td>
                  </tr>
                  <tr>
                    <td>Chennai</td>
                    <td>Container2</td>
                    <td>General / Other</td>
                  </tr>
                </tbody> */}
              </Table>
            </div>
          </div>
        </Page>
      </div>
  )
}

export default CustomerRequest


