import React, { Component, useState, useEffect } from 'react';
import './ContainersPage.css';

// import ModalDesign from './ModalDesign';
// import Containerform from './Containerform';
import querystring from 'querystring';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Page from 'components/Page';
// import axiosInstance from '../components/utility/axios';
import { useStateValue } from '../components/utility/stateProvider';
import {actionTypes} from '../components/utility/reducer';
import {CgSoftwareUpload} from 'react-icons/cg'
import DownloadIcon from "../assets/img/container/export-csv.png";
import UploadIcon from "../assets/img/container/import-csv.png";
import UserIcon from "../assets/img/container/add-user.png";
import {MdPersonAdd} from 'react-icons/md'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ContainersPage = (props) => {
  const [{ containers} , dispatch] = useStateValue();

  // const [depocode , dispatch] = useStateValue();
  const [userToken, setUserToken] = useState(localStorage.getItem("user_token"))
  const [depocode, setDepocode] = useState(localStorage.getItem("depocode"))
  const [toShow, setToShow] = useState(false);
  const [actionName, setActionName] = useState('');
  const [depoState, setDepoState] = useState('');
  const [loadeddata, setLoadedData] = useState([]);
  const [image, setImage] = useState({ preview: '', raw: '' });
  const [containerNumber, setContainerNumber] = useState('');
  const [manDate, setManDate] = useState('');

  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  useEffect(() => {
    submitHandler();
  }, []);

  const myFunction = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('myTable');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  };

   

  const changeToShow = (actionName, container_no, manDate) => {
    setToShow(true);
    setActionName(actionName);
    setContainerNumber(container_no);
    setManDate(manDate);
  };

  const depoStateHandler = depoState => {
    setDepoState(depoState);
  };

  const submitHandler = e => {
    axios
      .post(
        'http://18.134.0.153:3200/container/getcontainersfordepo',
        querystring.stringify({
          depocode : depocode,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            "sessiontoken": userToken
          },
        },
      )
      .then(data => {
     
        console.log(data.data.results);
        //if(data.data.results.length != containers.length){
       
          dispatch({
            type: actionTypes.SET_CONTAINERS,
            containers: data.data.results
          })
        //}
        // setLoadedData(data.data.results);
      })
      .catch(() => {});
  };

 let loadedContent=[];
if(containers){
   loadedContent = containers.map(singleData => {
    return (
      <tr key={singleData.container_no} >
        <td>{singleData.container_no}</td>
        <td>{singleData.container_size}</td>
        <td>{singleData.container_manufactuer_date}</td>
        <td>
            {singleData.image_upload_status}
        </td>
        <td>
          <button
            type="button"
            className="btn-default"
            onClick={() =>
              changeToShow(
                'SHARE_CONTAINER',
                singleData.container_no,
                singleData.container_manufactuer_date,
              )
            }
          >
            Share
          </button>{' '}
        </td>
      </tr>
    );
  });
}

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
          title="Containers"
          breadcrumbs={[{ name: 'containers', active: true }]}
          className="ContainersPage"
        ></Page><br />
        <div className="row">
          <div className="col-md-8">
            <input
              type="text"
              id="myInput"
              onKeyUp={myFunction}
              placeholder="Search for names.."
              title="Type in a name"
            />
          </div>
          <div className="col-md-2"  style={{ display: "flex",justifyContent: "space-around" }}>
            <Link to='/containerphotoupload'>
                <div style={{ maxWidth: "25px" }}>
                    <img
                      src={UploadIcon}
                      className="img-fluid fixed-banner"
                      alt="uploadicon"
                      title="UploadCSV"
                    />
                    </div>
              </Link>

              <Link to='/'>
                <div style={{ maxWidth: "25px" }}>
                    <img
                    src={DownloadIcon}
                    className="img-fluid fixed-banner"
                    alt="downloadicon"
                    title="DownloadCSV"
                    />
                    </div>
              </Link>
          </div>

          

          <div className="col-md-2">
            <Link to={'/containerform'}>
            {/* <MdPersonAdd size={25}/> */}
            <div style={{ maxWidth: "25px" }}>
                    <img
                    src={UserIcon}
                    className="img-fluid fixed-banner"
                    alt="usericon"
                    title="AddUser"
                    />
                    </div>
            </Link>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-12">
            <table className="table" id="myTable">
              <thead>
                <tr className="table-header">
                  <th>Container No.</th>
                  <th>Size</th>
                  <th>Date</th>
                  <th>Photo</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{loadedContent}</tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContainersPage;
