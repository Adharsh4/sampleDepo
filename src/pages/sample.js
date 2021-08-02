import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import IdleTimer from "react-idle-timer";

import ModalView from "./user/Dashboard/ModalView";

import { connect } from "react-redux";
import { refreshToken } from "../state/apiActions";
import { setKeycloakTokenExpiry } from "../state/loginAction";
import { applicationLogout } from "../state/utils";

class IdleTimeOut extends Component {
  constructor(props) {
    super(props);
    this.idleTimer = null;
    this.handleOnAction = this.handleOnAction.bind(this);
    this.handleOnActive = this.handleOnActive.bind(this);
    this.handleOnIdle = this.handleOnIdle.bind(this);
    this.refreshTokens = this.refreshTokens.bind(this);
    this.state = {
      showSessionModal: false,
    };
  }

  render() {
    console.warn("idletimeout");
    return (
      <div>
        <IdleTimer
          ref={(ref) => {
            this.idleTimer = ref;
          }}
          timeout={1000 * 60 * 10}
          onActive={this.handleOnActive}
          onIdle={this.handleOnIdle}
          onAction={this.handleOnAction}
          debounce={250}
        />
        <div className="completion-dialog">
          <ModalView
            className="custom-modal"
            show={this.state.showSessionModal}
            // onHide={() => {
            //     setshowLogoutModal(false)
            // }}
          >
            <div
              className="card custom mx-auto"
              style={{
                maxWidth: "362px",
              }} 
            >
              <div className="card-body">
                <div
                  className="text-weighted text-purple d-flex mb-1"
                  style={{ fontSize: "28px", color: "#3838C2" }}
                >
                  Session Expired
                  {/* <span className="ml-auto text-black" style={{cursor: "pointer", fontSize: "16px"}}
                            onClick={() => this.props.setKeycloakTokenExpiry(false)}>
                              &#10006;
                  </span> */}
                </div>

                <div className="text-weighted mt-4">
                  Your Session Expired..Do you want to renew the Session?
                </div>

                <Row className="mt-4">
                  <Col className="text-center">
                    <div
                      className="btn btn-block shadow-out text-button-bold remove-btn-shadow"
                      style={{ fontSize: "16px", cursor: "pointer" }}
                      onClick={() => {
                        applicationLogout();
                        this.props.setKeycloakTokenExpiry(false);
                      }}
                    >
                      No
                    </div>
                  </Col>
                  <Col className="text-center">
                    <div
                      className="btn btn-block btn-success"
                      style={{ fontSize: "16px", cursor: "pointer" }}
                      onClick={(e) => {
                        this.refreshTokens(e);
                      }}
                    >
                      Yes
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </ModalView>
        </div>
      </div>
    );
  }

  handleOnAction(event) {
    if (this.props.keycloakTokenExpired) {
      this.props.refreshToken();
      this.props.setKeycloakTokenExpiry(false);
    }
  }

  handleOnActive(event) {
    console.log("user is active", event);
    console.log("time remaining", this.idleTimer.getRemainingTime());
  }

  handleOnIdle(event) {
    console.log("user is idle", event);
    console.log("last active", this.idleTimer.getLastActiveTime());
    this.setState({
      showSessionModal: true,
    });
  }

  refreshTokens(e) {
    e.preventDefault();
    console.log("REFRESHING TOKEN");
    this.props.refreshToken();
    this.props.setKeycloakTokenExpiry(false);
    this.setState({
      showSessionModal: false,
    });
  }
}

const mapStateToProps = function (state) {
  return {
    keycloakTokenExpired: state.login.keycloakTokenExpired,
    userId: state.login.userId,
    userDetails: state.login.userDetails,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    setKeycloakTokenExpiry: (data) => dispatch(setKeycloakTokenExpiry(data)),
    refreshToken: () => dispatch(refreshToken()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IdleTimeOut);