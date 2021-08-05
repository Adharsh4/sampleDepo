import React, { Component, useEffect, useState } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import './ContainerPhoto.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../components/utility/axios';
import querystring from 'querystring';
import { RiImageAddFill } from 'react-icons/ri';
import { UncontrolledAlert } from 'reactstrap';
import { Link } from 'react-router-dom';
import JSZip from 'jszip';

const ContainerPhotoUpload = props => {
  const [randomString, setRandomString] = useState('');
  const [isconnerror, setIsConnError] = useState('');
  const [selectfile, setSelectFile] = useState([]);
  const [otherList, setOtherList] = useState([
    { name: 'Others', id: 1, preview: '', defaultValue: 0 },
  ]);
  const [list, setList] = useState([
    { name: 'CSC Plate', id: 1, preview: '', defaultValue: 0 },
    { name: 'Exterior Front', id: 2, preview: '', defaultValue: 0 },
    { name: 'Exterior Rear(Door)', id: 3, preview: '', defaultValue: 0 },
    { name: 'Exterior Left', id: 4, preview: '', defaultValue: 0 },
    { name: 'Exterior Right', id: 5, preview: '', defaultValue: 0 },
    { name: 'Exterior Roof', id: 6, preview: '', defaultValue: 0 },
    { name: 'Exterior Understructure', id: 7, preview: '', defaultValue: 0 },
    { name: 'Reefer : Machinery', id: 8, preview: '', defaultValue: 0 },
    { name: 'Tanks : Valves', id: 9, preview: '', defaultValue: 0 },
  ]);
  const [interlist, setInterList] = useState([
    { name: 'Interior Floor', id: 1, preview: '', defaultValue: 0 },
    { name: 'Interior Roof', id: 2, preview: '', defaultValue: 0 },
    { name: 'Interior Left', id: 3, preview: '', defaultValue: 0 },
    { name: 'Interior Right', id: 4, preview: '', defaultValue: 0 },
    { name: 'Interior Front', id: 5, preview: '', defaultValue: 0 },
    { name: 'Interior Door', id: 6, preview: '', defaultValue: 0 },
  ]);
  const [count, setCount] = useState(0);
  const [compressimg, setCompreeImage] = useState([]);
  const [intcount, setIntCount] = useState(0);
  const [othercount, setOtherCount] = useState(0);
  const [menuItems, setMenuItems] = useState('');
  const [exterior, setExterior] = useState(0);
  const [interior, setInterior] = useState(0);
  const [other, setOther] = useState(0);

  // const[image, setImage] = useState({preview: null})
  const [image, setImage] = useState({ preview: '', raw: '', id: 0 });

  const [checkContent, setCheckContent] = useState(null);
  const [selectedText, setSelectedText] = useState(0);
  const [userToken, setUserToken] = useState(
    localStorage.getItem('user_token'),
  );

  // const [deponame, setDepoName] = useState(props.match.params.deponame);

  useEffect(() => {
    console.log('aaa');
    // console.log(props);
    console.log(props.location.state);
  });

  useEffect(() => {
    if (count >= 1) {
      // console.log(  document.getElementsByClassName("exterior-checkbox")[0].checked);
      document.getElementsByClassName('exterior-checkbox')[0].checked = true;
      setExterior(1);
    }
    if (count < 1 && document.getElementsByClassName('exterior-checkbox')[0]) {
      // console.log(document.getElementsByClassName("exterior-checkbox")[0].checked = false);

      document.getElementsByClassName('exterior-checkbox')[0].checked = false;
      setExterior(0);
    }
  }, [count]);

  useEffect(() => {
    if (intcount >= 1) {
      // console.log(  document.getElementsByClassName("exterior-checkbox")[0].checked);
      document.getElementsByClassName('interior-checkbox')[0].checked = true;
      setInterior(1);
    }
    if (
      intcount < 1 &&
      document.getElementsByClassName('interior-checkbox')[0]
    ) {
      // console.log(document.getElementsByClassName("exterior-checkbox")[0].checked = false);

      document.getElementsByClassName('interior-checkbox')[0].checked = false;
      setInterior(0);
    }
  }, [intcount]);

  useEffect(() => {
    if (othercount >= 1) {
      // console.log(  document.getElementsByClassName("exterior-checkbox")[0].checked);
      document.getElementsByClassName('other-checkbox')[0].checked = true;
      setOther(1);
    }
    if (
      othercount < 1 &&
      document.getElementsByClassName('other-checkbox')[0]
    ) {
      // console.log(document.getElementsByClassName("exterior-checkbox")[0].checked = false);

      document.getElementsByClassName('other-checkbox')[0].checked = false;
      setOther(0);
    }
  }, [othercount]);

  //Exterior Functions-----------------------------------------------------------------------

  const handleChangePhoto = (e, id, index) => {
    console.log(id);
    let compress = compressimg;
    compress.push(e.target.files);
    setCompreeImage(compress);
    let newList = list.map(item => {
      if (item.id == id && e.target.files.length) {
        const obj = {
          ...item,
          defaultValue: 1,
          preview: URL.createObjectURL(e.target.files[0]),
        };
        return obj;
      } else {
        return { ...item };
      }
    });
    if (e.target.files[0]) {
      document.getElementsByClassName('checkbox-items')[index].checked = true;

      document.getElementsByClassName('checkbox-items')[index].disabled = false;
      let newProp = {
        [list[index].name]: e.target.files[0],
      };
      let toAdd = selectfile;
      toAdd.push(newProp);
      setSelectFile(toAdd);
      setCount(p => p + 1);
      setList(newList);
    }
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
        if (item.id == index + 1) {
          const obj = {
            ...item,
            defaultValue: 0,
            preview: '',
          };
          return obj;
        } else {
          return { ...item };
        }
      });
      document.getElementsByClassName('checkbox-items')[index].disabled = true;
      setList(newList);

      setCount(p => p - 1);
    }
  };

  const checkingBox = e => {
    if (!e.target.checked) {
      let items = document.getElementsByClassName('checkbox-items');
      for (let i = 0; i < items.length; i++) {
        items[i].checked = false;
        items[i].disabled = true;
      }
      let temp = list;
      for (let i = 0; i < temp.length; i++) {
        temp[i].preview = '';
        temp[i].defaultValue = 0;
      }
      console.log(temp.length);
      setList(temp);
      setCount(0);
      setExterior(0);
    } else {
      setExterior(1);
    }
  };

  //-------------------------------------------------------------------------------Exterior Functions X-----

  //----------Interior Fuction ------------------------------------------------------------------------------

  const handleInteriorChangePhoto = (e, id, index) => {
    console.log(id);
    let compress = compressimg;
    compress.push(e.target.files);
    setCompreeImage(compress);
    let newList = interlist.map(item => {
      if (item.id == id && e.target.files.length) {
        const obj = {
          ...item,
          defaultValue: 1,
          preview: URL.createObjectURL(e.target.files[0]),
        };
        return obj;
      } else {
        return { ...item };
      }
    });
    if (e.target.files[0]) {
      document.getElementsByClassName('checkbox-items-inter')[
        index
      ].checked = true;

      document.getElementsByClassName('checkbox-items-inter')[
        index
      ].disabled = false;
      setIntCount(p => p + 1);
      setInterList(newList);
    }
  };

  const handleInteriorOnChange = (e, id, index) => {
    // console.log(history);
    // console.log("aaa"+id);
    if (e.target.checked) {
      setIntCount(p => p + 1);
    } else {
      // console.log( document.getElementsByClassName('photo-upload')[index])
      // console.log("ss");
      // setRandomString("ss");
      let newList = interlist.map(item => {
        if (item.id == index + 1) {
          const obj = {
            ...item,
            defaultValue: 0,
            preview: '',
          };
          return obj;
        } else {
          return { ...item };
        }
      });
      document.getElementsByClassName('checkbox-items-inter')[
        index
      ].disabled = true;
      setInterList(newList);

      setIntCount(p => p - 1);
    }
  };

  const interiorCheckingBox = e => {
    if (!e.target.checked) {
      setInterior(1);
      let items = document.getElementsByClassName('checkbox-items-inter');
      for (let i = 0; i < items.length; i++) {
        items[i].checked = false;
        items[i].disabled = true;
      }
      let temp = interlist;
      for (let i = 0; i < temp.length; i++) {
        temp[i].preview = '';
        temp[i].defaultValue = 0;
      }
      console.log(temp.length);
      setInterList(temp);
      setIntCount(0);
      setInterior(0);
    } else {
      setInterior(1);
    }
  };

  //-----------------------------------------------------------------------Interior Function X ----------------

  //------------Other Function ----------------------------------------------------------------------------------

  const handleOtherChangePhoto = (e, id, index) => {
    console.log(id);
    let compress = compressimg;
    compress.push(e.target.files);
    setCompreeImage(compress);
    let newList = otherList.map(item => {
      if (item.id == id && e.target.files.length) {
        const obj = {
          ...item,
          defaultValue: 1,
          preview: URL.createObjectURL(e.target.files[0]),
        };
        return obj;
      } else {
        return { ...item };
      }
    });
    if (e.target.files[0]) {
      document.getElementsByClassName('checkbox-items-other')[
        index
      ].checked = true;

      document.getElementsByClassName('checkbox-items-other')[
        index
      ].disabled = false;
      setOtherCount(p => p + 1);
      setOtherList(newList);
    }
  };

  const handleOtherOnChange = (e, id, index) => {
    // console.log(history);
    // console.log("aaa"+id);
    if (e.target.checked) {
      setOtherCount(p => p + 1);
    } else {
      // console.log( document.getElementsByClassName('photo-upload')[index])
      // console.log("ss");
      // setRandomString("ss");
      let newList = otherList.map(item => {
        if (item.id == index + 1) {
          const obj = {
            ...item,
            defaultValue: 0,
            preview: '',
          };
          return obj;
        } else {
          return { ...item };
        }
      });
      document.getElementsByClassName('checkbox-items-other')[
        index
      ].disabled = true;
      setOtherList(newList);

      setOtherCount(p => p - 1);
    }
  };

  const otherCheckingBox = e => {
    if (!e.target.checked) {
      let items = document.getElementsByClassName('checkbox-items-other');
      for (let i = 0; i < items.length; i++) {
        items[i].checked = false;
        items[i].disabled = true;
      }
      let temp = otherList;
      for (let i = 0; i < temp.length; i++) {
        temp[i].preview = '';
        temp[i].defaultValue = 0;
      }
      console.log(temp.length);
      setOtherList(temp);
      setOtherCount(0);
      setOther(0);
    } else {
      setOther(1);
    }
  };

  //-------------------------------------------------------------------------Other Funtion X ----------------------------

  const handleOnSubmit = e => {
    e.preventDefault();
    compressimg.map(item => {
      console.log('file', item);
    });
    console.log(selectfile);
    let zip = new JSZip();
    for (let file of compressimg) {
      console.log('arun', file[0]);
      let filename = file[0].name;
      zip.file(filename, file[0], { binary: true });
    }
    let zipblob;
    zip.generateAsync({ type: 'blob' }).then(blobdata => {
      // create zip blob file
      zipblob = new Blob([blobdata]);

      // For development and testing purpose
      // Download the zipped file
      // var elem = window.document.createElement('a');
      // elem.href = window.URL.createObjectURL(zipblob);
      // elem.download = 'compressed.zip';
      // elem.click();
    });
    let formedObjext = {
      extstatus: exterior,
      intstatus: interior,
      intfront: interlist[4].defaultValue,
      intdoors: interlist[5].defaultValue,
      introof: interlist[1].defaultValue,
      intfloor: interlist[0].defaultValue,
      intleft: interlist[2].defaultValue,
      intright: interlist[3].defaultValue,
      // interiormachinery: 1,
      // interiorcscplate: 1,
      // interiorothers: 1,
      extfront: list[1].defaultValue,
      extrearrdoor: list[2].defaultValue,
      extroof: list[5].defaultValue,
      extleftside: list[3].defaultValue,
      extrightside: list[4].defaultValue,
      extcscplate: list[0].defaultValue,
      extunderstructure: list[6].defaultValue,
      extreefermachinery: list[7].defaultValue,
      exttanksvalves: list[8].defaultValue,
      othersstatus: other,
      others: otherList[0].defaultValue,
    };
    console.log(exterior);
    axios
      .post(
        `http://18.134.0.153:3200/container/containercreation`,
        querystring.stringify({
          ...props.location.state,
          ...formedObjext,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            sessiontoken: userToken,
          },
        },
      )
      .then(data => {
        // setLoadedData(data.data.results);
        console.log('yyy');
        console.log(data.data.url);
        const fd = new FormData();
        fd.append('blobData', zipblob);
        axios
          .put(data.data.url, fd, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(imageData => {
            console.log('xxx');
            console.log(imageData);
            alert('Container Created Successfully');
            // props.history.push("/containers");
          });
        //  console.log(data);
      })
      .catch(() => {
        setIsConnError('errors');
      });
  };

  const ConnErrorMessage = (
    <UncontrolledAlert color="danger">
      Connection Failed, Please Try Again Later
    </UncontrolledAlert>
  );

  return (
    <div className="container">
      <div className="form-group mb-3 text-center">
        {isconnerror !== '' ? ConnErrorMessage : null}
      </div>
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
                            <RiImageAddFill />
                          </span>
                        </div>
                      )}
                    </label>

                    <input
                      type="file"
                      id={`upload-button-${item.id}`}
                      className="photo-upload"
                      onChange={e => handleChangePhoto(e, item.id, i)}
                      style={{ display: 'none' }}
                      key={randomString}
                    />

                    <div>
                      {item.name}
                      <input
                        className={`ml-1 checkbox-items check-${i}`}
                        type="checkbox"
                        disabled
                        onChange={e => handleOnChange(e, item.id, i)}
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Interior */}
        <br />
        <br />
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
                    <label
                      htmlFor={`upload-buttons-${item.id}`}
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
                            <RiImageAddFill />
                          </span>
                        </div>
                      )}
                    </label>

                    <input
                      type="file"
                      id={`upload-buttons-${item.id}`}
                      className="photo-upload"
                      onChange={e => handleInteriorChangePhoto(e, item.id, i)}
                      style={{ display: 'none' }}
                      key={randomString}
                    />

                    <div>
                      {item.name}
                      <input
                        className={`ml-1 checkbox-items-inter check-${i}`}
                        type="checkbox"
                        disabled
                        onChange={e => handleInteriorOnChange(e, item.id, i)}
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <br />
        <br />
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
              className="ml-0 other-checkbox"
              defaultChecked={false}
              onChange={otherCheckingBox}
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
                    <label
                      htmlFor={`upload-buttons-other-${item.id}`}
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
                            <RiImageAddFill />
                          </span>
                        </div>
                      )}
                    </label>

                    <input
                      type="file"
                      id={`upload-buttons-other-${item.id}`}
                      className="photo-upload"
                      onChange={e => handleOtherChangePhoto(e, item.id, i)}
                      style={{ display: 'none' }}
                      key={randomString}
                    />

                    <div>
                      {item.name}
                      <input
                        className={`ml-1 checkbox-items-other check-${i}`}
                        type="checkbox"
                        disabled
                        onChange={e => handleOtherOnChange(e, item.id, i)}
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="buttons">
          <Link to="/containerform">
            <button className="btn btn-primary">Back</button>
          </Link>
          <button
            className="btn btn-primary submit"
            onClick={e => handleOnSubmit(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(ContainerPhotoUpload);

// axiosInstance
//       .post(
//         `/container/:deponame/:containerno/upload`,
//         querystring.stringify({
//           username: 'depoadmin',
//         }),
//         {
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//           },
//         },
//       )
//       .then(data => {
//         // setLoadedData(data.data.results);
//         console.log("aaaaaaaaaaaa");

//       })
//       .catch(() => {
//         setIsConnError("errors");
//       });
{
  /* <h5>
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
        </div> */
}
