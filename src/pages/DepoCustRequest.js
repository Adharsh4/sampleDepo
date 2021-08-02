import React, {useEffect} from 'react'
import './DepoCustRequest.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Page from 'components/Page';
import { Table,Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { useStateValue } from '../components/utility/stateProvider';
import { actionTypes } from '../components/utility/reducer';
import axios from "axios";
import querystring from 'querystring';
import { Badge } from 'reactstrap';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel" 
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
    };
  }
  
  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

function DepoCustPage() {

  useEffect(() => {
    DepoCustomerHandler();
  }, []);

   
  const DepoCustomerHandler = e => {
    axios
      .post(
        'http://18.134.0.153:3200/container/getcontainerdatafordepo',
        querystring.stringify({
          deponame: 'Chennai',
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then(data => {
        console.log("sandeep");
        console.log(data)
        //if(data.data.results.length != containers.length){
          console.log("sandeep1");
          dispatch({
            type: actionTypes.SET_REQUESTS,
            requests: data.data.results
          })
        //}
        // setLoadedData(data.data.results);
      })
      .catch(() => {
        console.log("errorrr")
      });
  };

  const checkAccept = (e, container_no) => {
    e.preventDefault();
    axios
      .post(
        "http://18.134.0.153:3200/container/containerrequestaccept",
        querystring.stringify({
          containerno : container_no,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((data) => {
        // setLoadedData(data.data.results);
        console.log(data);
        
    //     alert(data.data.message)
        
      })
      .catch(() => {
        console.log("errorrrrrrrr")
      });
  };

    

  const [{requests}, dispatch] = useStateValue();
    const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let myRequests = requests.filter(singleData => singleData.container_status === "Active")
  let myRequestsHistory = requests.filter(singleData => singleData.cimage_upload_status === "Completed")

    return (
        <div className="cust-request">
            <Page
            className="DepoCustPage"
      title="Container Request"
      breadcrumbs={[{ name: 'container request', active: true }]}
    >
              <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Customer Request" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="My Request" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Request History" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div className="row">
            <div className="col-lg-12">
              <Table hover>
                <thead>
                  <tr className="table-header">
                    <th>Container No</th>
                    <th>Date</th>
                    <th>Asset Owner</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map(singleData => {
                    return (
                      <tr>
                      <td>{singleData.container_no}</td>
                      <td>{singleData.container_manufactuer_date}</td>
                      <td>{singleData.container_asset_owner}</td>
                      <td>
                        {singleData.container_status === "Pending" ? <div className="buttons">
                            <Button color="success" onClick={(e) => checkAccept(e, singleData.container_no)}>Accept</Button>{' '}
                            <Button color="danger">Decline</Button>{' '}
                          </div>: singleData.container_status === "Active" ? <div> <h5><Badge color="success">Accepted</Badge></h5></div> :
                          <div> <h5><Badge color="danger">Declined</Badge></h5></div>}
                          
                      </td>
                    </tr>
                    )
                  })}
                </tbody>
              </Table>
            </div>
          </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="row">
            <div className="col-lg-12">
              <Table hover>
                <thead>
                  <tr className="table-header">
                    <th>Container No</th>
                    <th>Date</th>
                    <th>Purpose</th>
                    <th>status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myRequests.map(singleData => {
                      return (
                            <tr>
                        <td>{singleData.container_no}</td>
                        <td>{singleData.container_manufactuer_date}</td>
                        <td>{singleData.container_purpose}</td>
                        <td>{singleData.image_upload_status}</td>
                        <td>
                            <div className="buttons">
                            <Link to="/containerphotoupload"><Button color="success">Upload</Button></Link>{' '}
                            <Button color="warning">On Hold</Button>{' '}
                            <Button color="danger">Cancel</Button>{' '}
                            </div>
                        </td>
                      </tr>
                      )
                  })}
                  
                  
                </tbody>
              </Table>
            </div>
          </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="row">
            <div className="col-lg-12">
              <Table hover>
                <thead>
                  <tr className="table-header">
                    <th>Container No</th>
                    <th>Date</th>
                    <th>Purpose</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {myRequestsHistory.map(singleData => {
                    return (
                            <tr>
                          <td>{singleData.container_n}</td>
                          <td>{singleData.container_manufactuer_date}</td>
                          <td>{singleData.container_purpose}</td>
                          <td>
                              <div className="buttons">
                              <Button color="primary">Share</Button>{' '}
                              </div>
                          </td>
                        </tr>
                    )
                  })}
                </tbody>
              </Table>
            </div>
          </div>
      </TabPanel>
    </div>
    </Page>
        </div>
    )
}

export default DepoCustPage
