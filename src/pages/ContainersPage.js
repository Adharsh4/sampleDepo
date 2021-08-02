import React, { Component, useState, useEffect } from 'react';
import './ContainersPage.css';

// import ModalDesign from './ModalDesign';
// import Containerform from './Containerform';
import querystring from 'querystring';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Page from 'components/Page';
import axiosInstance from '../components/utility/axios';
import { useStateValue } from '../components/utility/stateProvider';
import {actionTypes} from '../components/utility/reducer';
import {CgSoftwareUpload} from 'react-icons/cg'
import {MdPersonAdd} from 'react-icons/md'

const ContainersPage = () => {
  const [{ containers }, dispatch] = useStateValue();


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
    axiosInstance
      .post(
        '/container/getcontainersfordepoadmin',
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

 

  let loadedContent = containers.map(singleData => {
    return (
      <tr key={singleData.container_no} >
        <td>{singleData.container_no}</td>
        <td>{singleData.container_size}</td>
        <td>{singleData.container_manufactuer_date}</td>
        <td>
          <button
            type="button"
            className="btn-default"
            onClick={() => changeToShow('PHOTO_UPLOAD')}
          >
            {singleData.image_upload_status}
          </button>
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
          <div className="col-md-2 ">
            <Link to='/containerphotoupload'><CgSoftwareUpload size={25}  /></Link>
          </div>
          <div className="col-md-2">
            <Link to={'/containerform'}>
            <MdPersonAdd size={25}/>
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
