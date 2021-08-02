import React from 'react'
import Page from 'components/Page';
import { Link } from "react-router-dom";
import {RiAddCircleFill} from 'react-icons/ri'
import './CustomerRequest.css'
import { Table } from 'reactstrap';
import querystring from 'querystring';
import axios from 'axios';
import { useStateValue } from '../components/utility/stateProvider';
import {actionTypes} from '../components/utility/reducer';

function CustomerPage() {

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
    

    return (
        <div>
             <Page
          className="CustomerPage"
          title="Customers"
          breadcrumbs={[{ name: 'customers', active: true }]}
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
              <Link to={'/newrequest'}>
                <RiAddCircleFill className="icon"/>
              </Link>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-12">
              <Table hover>
                <thead>
                  <tr className="table-header">
                    <th>Customer Name</th>
                    <th>Mobile Number</th>
                    <th>E-Mail</th>
                    <th>Contact Person</th>
                    <th>Address</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Customer 1</td>
                    <td>9841983190</td>
                    <td>customer1@gmail.com</td>
                    <td>Arun</td>
                    <td>Chennai Depo</td>
                  </tr>
                  <tr>
                  <td>Customer 2</td>
                    <td>9001983190</td>
                    <td>customer2@gmail.com</td>
                    <td>Shan</td>
                    <td>Pune Depo</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Page>
        </div>
    )
}

export default CustomerPage
