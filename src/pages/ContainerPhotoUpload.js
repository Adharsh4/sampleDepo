import React, { Component, useEffect, useState } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import './ContainerPhoto.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../components/utility/axios';
import querystring from 'querystring';
import {RiImageAddFill} from 'react-icons/ri'
import {
  UncontrolledAlert,
} from 'reactstrap';

const ContainerPhotoUpload = () => {
  const [randomString, setRandomString] = useState("");
  const[isconnerror, setIsConnError]=useState("")

  const [otherList, setOtherList] = useState([
    { name: 'Others', id: 1, preview: '' }
  ])
  const [list, setList] = useState([
    { name: 'CSC Plate', id: 1, preview: '' },
    { name: 'Exterior Front', id: 2, preview: '' },
    { name: 'Exterior Rear(Door)', id: 3, preview: '' },
    { name: 'Exterior Left', id: 4, preview: '' },
    { name: 'Exterior Right', id: 5, preview: '' },
    { name: 'Exterior Roof', id: 6, preview: '' },
    { name: 'Exterior Understructure', id: 7, preview: '' },
    { name: 'Reefer : Machinery', id: 8, preview: '' },
    { name: 'Tanks : Valves', id: 9, preview: '' },
  ]);
  const [interlist, setInterList] = useState([
    { name: 'Interior Floor', id: 1, preview: '' },
    { name: 'Interior Roof', id: 2, preview: '' },
    { name: 'Interior Left', id: 3, preview: '' },
    { name: 'Interior Right', id: 4, preview: '' },
    { name: 'Interior Front', id: 5, preview: '' },
    { name: 'Interior Door', id: 6, preview: '' },
  ]);
  const [count, setCount] = useState(0);
  const [intcount, setIntCount] = useState(0);
  const [menuItems, setMenuItems] = useState('');

  // const[image, setImage] = useState({preview: null})
  const [image, setImage] = useState({ preview: '', raw: '', id: 0 });

  const [checkContent, setCheckContent] = useState(null);
  const [selectedText, setSelectedText] = useState(0);

  // const [deponame, setDepoName] = useState(props.match.params.deponame);

  useEffect(() => {
    console.log('aaa');
    // console.log(props);
  });

  useEffect(() => {
    if (count >= 1) {
      // console.log(  document.getElementsByClassName("exterior-checkbox")[0].checked);
      document.getElementsByClassName('exterior-checkbox')[0].checked = true;
    }
    if (count < 1 && document.getElementsByClassName('exterior-checkbox')[0]) {
      // console.log(document.getElementsByClassName("exterior-checkbox")[0].checked = false);

      document.getElementsByClassName('exterior-checkbox')[0].checked = false;
    }
  }, [count]);

  useEffect(() => {
    if (intcount >= 1) {
      // console.log(  document.getElementsByClassName("exterior-checkbox")[0].checked);
      document.getElementsByClassName('interior-checkbox')[0].checked = true;
    }
    if ( 
      intcount < 1 &&
      document.getElementsByClassName('interior-checkbox')[0]
    ) {
      // console.log(document.getElementsByClassName("exterior-checkbox")[0].checked = false);

      document.getElementsByClassName('interior-checkbox')[0].checked = false;
    }
  }, [intcount]);

  const handleChangePhoto = (e, id, index) => {
    console.log(id);
    let newList = list.map(item => {
      if (item.id == id && e.target.files.length) {
        const obj = {
          ...item,
          preview: URL.createObjectURL(e.target.files[0]),
        };
        return obj;
      } else {
        return { ...item };
      }
    });
    
    axiosInstance
      .post(
        `/container/:deponame/:containerno/upload`,
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
        // setLoadedData(data.data.results);
        console.log("aaaaaaaaaaaa");
        document.getElementsByClassName('checkbox-items')[index].checked = true;
      setCount(p => p + 1);
        
      })
      .catch(() => {
        setIsConnError("errors");
      });
    setList(newList);
  };

  const handleOnChange = (e, id, index) => {
    // console.log(history);
    // console.log("aaa"+id);
    if (e.target.checked) {
      setCount(p => p + 1);
    } else {
      // console.log( document.getElementsByClassName('photo-upload')[index])
      // console.log("ss");
      // setRandomString("ss");
      let newList = list.map(item => {
        if (item.id == index+1) {
          const obj = {
            ...item,
            preview: "",
          };
          return obj;
        } else {
          return { ...item };
        }
      });
      setList(newList);
      
      setCount(p => p - 1);
    }
  };

  

  const handleInteriorChangePhoto = (e, id, index) => {
    console.log(id);
    let newListt = interlist.map(item => {
      if (item.id == id && e.target.files.length) {
        const obj = {
          ...item,
          preview: URL.createObjectURL(e.target.files[0]),
        };
        return obj;
      } else {
        return { ...item };
      }
    });
    
    axios
      .post(
        `http://18.134.0.153:3200/container/:deponame/:containerno/upload`,
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
        // setLoadedData(data.data.results);
        console.log("aaaaaaaaaaaa");
        document.getElementsByClassName('checkbox-items-inter')[index].checked = true;
        setIntCount(p => p + 1);
        
      })
      .catch(() => {
        setIsConnError("errors");
      });
      setInterList(newListt);
  };

  const handleInteriorOnChange = (e, id, index) => {
    if (e.target.checked) {
      setIntCount(p => p + 1);
    } else {
      // console.log( document.getElementsByClassName('photo-upload')[index])
      // console.log("ss");
      // setRandomString("ss");
      let newListt = interlist.map(item => {
        if (item.id == index+1) {
          const obj = {
            ...item,
            preview: "",
          };
          return obj;
        } else {
          return { ...item };
        }
      });
      setInterList(newListt);
      
      setIntCount(p => p - 1);
    }
  };

  const interiorCheckingBox = e => {
    if (!e.target.checked) {
      let items = document.getElementsByClassName('checkbox-items-inter');
      for (let i = 0; i < items.length; i++) {
        items[i].checked = false;
      }
      let temp = interlist;
      for(let i=0;i<temp.length;i++){
        
        temp[i].preview = "";
      }
      console.log(temp.length);
      setInterList(temp);
      setIntCount(0);
    }
  };

  const checkingBox = e => {
    if (!e.target.checked) {
      let items = document.getElementsByClassName('checkbox-items');
      for (let i = 0; i < items.length; i++) {
        items[i].checked = false;
      }
      let temp = list;
      for(let i=0;i<temp.length;i++){
        
        temp[i].preview = "";
      }
      console.log(temp.length);
      setList(temp);
      setCount(0);
    }
  };

  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };

  
  const ConnErrorMessage = (
    <UncontrolledAlert color="danger">
       Connection Failed, Please Try Again Later
    </UncontrolledAlert>
  )

  return (
    <div className="container">
      <div className="form-group mb-3 text-center">
                  {isconnerror !== "" ? ConnErrorMessage : null}</div>
      <h4 className="text-center">CONTAINER PHOTO UPLOAD</h4>

      <form>
        <h5>
          <i>Exterior Photos</i>
        </h5>
        <div className="row checkbox">
          <div className="col-md-2">
            <label>Photo Category : </label>
          </div>
          <div className="col-md-9">
            <input
              type="checkbox"
              className="ml-0 exterior-checkbox"
              defaultChecked={false}
              onChange={checkingBox}
            />{' '}
            Exterior
          </div>
        </div>
        <div className="row checkbox">
          <div className="col-md-2">
            <label>Photo Subcategory:</label>
          </div>
          <div className="col-md-10">
          <div class="scrollmenu">
          
          {list.map((item, i) => (
            
            <a>
                <div className="menu-item" key={item.id}>
                  
                  <label htmlFor={`upload-button-${item.id}`} className="label-for-photo">
                    {item.preview ?
                      <img src={item.preview} alt="dummy" width="100" height="100" />
                      :
                      <div>
                        <span className="fa-stack fa-2x mt-3 mb-2">
                        <RiImageAddFill /></span>
                        
                      </div>}
                  </label>

                  <input
                    type="file"
                    id={`upload-button-${item.id}`}
                    className="photo-upload"
                    onChange={(e) => handleChangePhoto(e, item.id, i)}
                    style={{ display: "none" }}
                    key = {randomString}
                  />

                  <div>
                    {item.name}
                    <input
                      className={`ml-1 checkbox-items check-${i}`}
                      type="checkbox"
                      onChange={(e) => handleOnChange(e, item.id, i)}
                    />
                  </div>
                </div>
                
                
                </a>
              ))}
              
          </div>

          </div>
        </div>


 {/* Interior */}
 <br/><br/>
        <h5>
          <i>Interior Photos</i>
        </h5>
        <div className="row checkbox">
          <div className="col-md-2">
            <label>Photo Category : </label>
          </div>
          <div className="col-md-10">
            <input
              type="checkbox"
              className="ml-0 interior-checkbox"
              defaultChecked={false}
              onChange={interiorCheckingBox}
            />{' '}
            Interior
          </div>
        </div>
        <div className="row checkbox">
          <div className="col-md-2">
            <label>Photo Subcategory:</label>
          </div>
          <div className="col-md-10">
          <div class="scrollmenu">
          
          {interlist.map((item, i) => (
            
            <a>
                <div className="menu-item" key={item.id}>
                  
                  <label htmlFor={`upload-buttons-${item.id}`} className="label-for-photo">
                    {item.preview ?
                      <img src={item.preview} alt="dummy" width="100" height="100" />
                      :
                      <div>
                        <span className="fa-stack fa-2x mt-3 mb-2">
                        <RiImageAddFill /></span>
                        
                      </div>}
                  </label>

                  <input
                    type="file"
                    id={`upload-buttons-${item.id}`}
                    className="photo-upload"
                    onChange={(e) => handleInteriorChangePhoto(e, item.id, i)}
                    style={{ display: "none" }}
                    key = {randomString}
                  />

                  <div>
                    {item.name}
                    <input
                      className={`ml-1 checkbox-items-inter check-${i}`}
                      type="checkbox"
                      onChange={(e) => handleInteriorOnChange(e, item.id, i)}
                    />
                  </div>
                </div>
                
                
                </a>
              ))}
              
  </div>

          </div>
        </div>











        {/* <br/><br/>
        <h5>
          <i>Others</i>
        </h5>
        <div className="row checkbox">
          <div className="col-md-2">
            <label>Photo Category : </label>
          </div>
          <div className="col-md-10">
            <input
              type="checkbox"
              className="ml-0 interior-checkbox"
              defaultChecked={false}
              onChange={interiorCheckingBox}
            />{' '}
            Others
          </div>
        </div>
        <div className="row checkbox">
          <div className="col-md-2">
            <label>Photo Subcategory:</label>
          </div>
          <div className="col-md-10">
          <div class="scrollmenu">
          
          {otherList.map((item, i) => (
            
            <a>
                <div className="menu-item" key={item.id}>
                  
                  <label htmlFor={`upload-buttons-${item.id}`} className="label-for-photo">
                    {item.preview ?
                      <img src={item.preview} alt="dummy" width="100" height="100" />
                      :
                      <div>
                        <span className="fa-stack fa-2x mt-3 mb-2">
                        <RiImageAddFill /></span>
                        
                      </div>}
                  </label>

                  <input
                    type="file"
                    id={`upload-buttons-${item.id}`}
                    className="photo-upload"
                    onChange={(e) => handleInteriorChangePhoto(e, item.id, i)}
                    style={{ display: "none" }}
                    key = {randomString}
                  />

                  <div>
                    {item.name}
                    <input
                      className={`ml-1 checkbox-items-inter check-${i}`}
                      type="checkbox"
                      onChange={(e) => handleInteriorOnChange(e, item.id, i)}
                    />
                  </div>
                </div>
                
                
                </a>
              ))}
              
  </div>

          </div>
        </div> */}



        <div className="buttons">
          
            <button className="btn btn-primary">Previous</button>
          <button className="btn btn-primary submit">Submit</button>
        </div>





        
      </form>
    </div>
  );
}

export default withRouter(ContainerPhotoUpload);


{/* <h5>
          <i>Interior Photos</i>
        </h5>
        <div className="row checkbox mt-3">
          <div className="col-md-2">
            <label>Photo Category : </label>
          </div>
          <div className="col-md-10">
            <input
              type="checkbox"
              value=""
              className="ml-0 interior-checkbox"
              defaultChecked={false}
              onChange={interiorCheckingBox}
            />{' '}
            Interior
          </div>
        </div>
        <div className="row checkbox">
          <div className="col-md-2">
            <label>Photo Subcategory : </label>
          </div>
          <div className="col-md-9">
            <ScrollMenu
              data={list.map((item, i) => (
                <div className="menu-item" key={item.id}>
                  <div>{item.id}</div>
                  <label
                    htmlFor={`upload-button-${item.id}`}
                    className="label-for-photo"
                  >
                    {item.preview ? (
                      <img
                        src={item.preview}
                        alt="dummy"
                        width="100"
                        height="100"
                      />
                    ) : (
                      <div>
                        <span className="fa-stack fa-2x mt-3 mb-2">
                          <i className="bx bx-image-add" id="header-toggle"></i>
                        </span>
                      
                      </div>
                    )}
                  </label>

                  <input
                    type="file"
                    id={`upload-button-${item.id}`}
                    className="photo-upload"
                    onChange={e => handleInteriorChangePhoto(e, item.id)}
                    style={{ display: 'none' }}
                  />

         
                  <div>
                    {item.name}
                    <input
                      className="ml-1 intcheckbox-items"
                      type="checkbox"
                      onChange={e => handleInteriorOnChange(e, item.id)}
                    />
                  </div>
                </div>
              ))}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
             
            ></ScrollMenu>
          </div>
        </div>

        <div>
          <Link to={'/containerform'}>
            <button className="btn btn-primary">Previous</button>
          </Link>
          <button className="btn btn-primary submit">Submit</button>
        </div> */}