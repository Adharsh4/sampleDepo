import React, { useEffect, useState } from 'react';
import Page from 'components/Page';
import './UserPage.css';
import querystring from 'querystring';
import axios from 'axios';
import { useStateValue } from '../components/utility/stateProvider';
import {actionTypes} from '../components/utility/reducer';
import { Link } from "react-router-dom";
import {CgSoftwareUpload} from 'react-icons/cg'
import {MdPersonAdd} from 'react-icons/md'

const UserPage = () => {

  const [{ users }, dispatch] = useStateValue();
   
  const [toShow,  setToShow] = useState(false);
  const [depoState, setDepoState] = useState("");

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
    userSubmitHandler();
  }, []);

   
  const userSubmitHandler = e => {
    axios
      .post(
        'http://18.134.0.153:3200/user/getdepousers',
        querystring.stringify({
          username: 'depoadmin',  
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then(data => {
       
        console.log(data.data.depoUsers)
        //if(data.data.results.length != containers.length){
        
          dispatch({
            type: actionTypes.SET_USERS,
            users: data.data.depoUsers
          })
        //}
        // setLoadedData(data.data.results);
      })
      .catch(() => {});
  };
    
         
        return (
            
          <React.Fragment>
             

             <div>
               {/* <div>
                 <ModalDesign toShow={toShow} modalDesignClicked={modalClickedHandler}>
                    {content}
                 </ModalDesign>
               </div> */}

               {/* <button onClick={changeToShow} style={{marginLeft: '100px', marginTop:'100px'}}>Click</button> */}
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
            <div className="depo-page height-100 main">
            <Page
            className="UserPage"
      title="Users"
      breadcrumbs={[{ name: 'users', active: true }]}
    ><br/>
                <div className="row">
                    <div className="col-md-8">
                    <input type="text" id="myInput" onKeyUp={myFunction} placeholder="Search for names.." title="Type in a name" /> 
                    </div>
                    <div className="col-md-2">
                    <CgSoftwareUpload size={25}  />
                    </div>
                    <div className="col-md-2">
                      <Link to={'/userform'}>
                      <MdPersonAdd size={25}/> </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <table className="table" id="myTable">
    <thead>
      <tr className="table-header">
        <th>Name</th>
        <th>E-mail</th>
        <th>Usertype</th>
        <th>Status</th>
      </tr>
    </thead>
      {users.map(singleData => {

        return <tbody>
        <tr>
          <td>{singleData.userName}</td>
          <td>{singleData.userEmail}</td>
          <td>depoUser</td>
          <td> <span className="badge badge-success">Active</span></td>
        </tr>
        
      </tbody>
      })}
    
  </table>
                  
                    </div>
                </div>
                </Page>
            </div>
  </React.Fragment>
        );
    };

 
export default UserPage
