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

function CustDepoPage() {

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
          className="CustDepoPage"
          title="Depo"
          breadcrumbs={[{ name: 'depo', active: true }]}
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
              <Link to={'/customerdepoform'}>
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
                    <th>Depo Name</th>
                    <th>Depo Code</th>
                    <th>Depo Description</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Chennai</td>
                    <td>CHA_TRI</td>
                    <td>Chennai Depo</td>
                  </tr>
                  <tr>
                  <td>Kolkata</td>
                    <td>KOL_PORT</td>
                    <td>Kolkata Depo</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Page>
        </div>
    )
}

export default CustDepoPage
