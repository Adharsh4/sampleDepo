import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch, HashRouter } from 'react-router-dom';
import CustomerLogin from './pages/CustomerLogin'
import './styles/reduction.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import ViewContainerDetails from './pages/ViewContainerDetails';


const AlertPage = React.lazy(() => import('pages/AlertPage'));
const AuthModalPage = React.lazy(() => import('pages/AuthModalPage'));
const BadgePage = React.lazy(() => import('pages/BadgePage'));
const ButtonGroupPage = React.lazy(() => import('pages/ButtonGroupPage'));
const ButtonPage = React.lazy(() => import('pages/ButtonPage'));
const CardPage = React.lazy(() => import('pages/CardPage'));
const ChartPage = React.lazy(() => import('pages/ChartPage'));
const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
const DropdownPage = React.lazy(() => import('pages/DropdownPage'));
const FormPage = React.lazy(() => import('pages/FormPage'));
const InputGroupPage = React.lazy(() => import('pages/InputGroupPage'));
const ModalPage = React.lazy(() => import('pages/ModalPage'));
const ProgressPage = React.lazy(() => import('pages/ProgressPage'));
const TablePage = React.lazy(() => import('pages/TablePage'));
const TypographyPage = React.lazy(() => import('pages/TypographyPage'));
const WidgetPage = React.lazy(() => import('pages/WidgetPage'));
const ContainersPage = React.lazy(()=> import('pages/ContainersPage'))
const UserPage = React.lazy(()=> import('pages/UserPage'))
const HomePage = React.lazy(()=> import('pages/HomePage'))
const CustomerRequest = React.lazy(()=> import('pages/CustomerRequest'))
const NewRequestForm = React.lazy(()=> import('pages/NewRequestForm'))
const DepoCustRequest = React.lazy(()=> import('pages/DepoCustRequest'))
const ContainerPhotoUpload = React.lazy(()=> import('pages/ContainerPhotoUpload'))
const UserForm = React.lazy(()=> import('pages/UserForm'))
const Containerform = React.lazy(()=> import('pages/Containerform'))
const CustomerHomePage = React.lazy(()=> import('pages/CustomerHomePage'))
const CustContainerPage = React.lazy(()=> import('pages/CustContainerPage'))
const CustomerPage = React.lazy(()=> import('pages/CustomerPage'))
const CustDepoPage = React.lazy(()=> import('pages/CustDepoPage'))
const DepoCreationForm = React.lazy(()=> import('pages/DepoCreationForm'))
const ViewContainerDetails = React.lazy(()=> import('pages/ViewContainerDetails'))

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`; 
};

class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       modal: false
    }
  }

  render() {
    const toggle = () => {
      this.setState({modal : !this.state.modal})
    }
    
    return (
      <>
      <HashRouter>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <LoginPage {...props} authState={STATE_LOGIN} />
              )}
            />
              <LayoutRoute
              exact
              path="/"
              layout={EmptyLayout}
              component={props => (
                <LoginPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/customerlogin"
              layout={EmptyLayout}
              component={props => (
                <CustomerLogin {...props} authState={STATE_LOGIN} />
              )}
            />
            
            <LayoutRoute
              exact
              path="/register"
              layout={EmptyLayout}
              component={props => (
                <RegisterPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                {/* <Route exact path="/" component={LoginPage} /> */}
                <Route exact path='/home' component={HomePage} />
                <Route exact path='/containers' component={ContainersPage} />
                <Route exact path='/users' component={UserPage} />
                <Route exact path="/login-modal" component={AuthModalPage} />
                <Route exact path="/buttons" component={ButtonPage} />
                <Route exact path="/cards" component={CardPage} />
                <Route exact path="/widgets" component={WidgetPage} />
                <Route exact path="/typography" component={TypographyPage} />
                <Route exact path="/alerts" component={AlertPage} />
                <Route exact path="/tables" component={TablePage} />
                <Route exact path="/badges" component={BadgePage} />
                <Route exact path="/customerrequest" component={CustomerRequest} />
                <Route exact path="/newrequest" component={NewRequestForm} />
                <Route exact path="/containerrequest" component={DepoCustRequest} />
                <Route exact path="/containerphotoupload" component={ContainerPhotoUpload} />
                <Route exact path="/userform" component={UserForm} />
                <Route exact path="/containerform" component={Containerform} />
                <Route exact path="/customerhomepage" component={CustomerHomePage} />
                <Route exact path="/customercontainerpage" component={CustContainerPage} />
                <Route exact path="/customerpage" component={CustomerPage} />
                <Route exact path="/customerdepopage" component={CustDepoPage} />
                <Route exact path="/customerdepoform" component={DepoCreationForm} />
                <Route exact path="/viewContainer" component={ViewContainerDetails} />
                <Route
                  exact
                  path="/button-groups"
                  component={ButtonGroupPage}
                />
                <Route exact path="/dropdowns" component={DropdownPage} />
                <Route exact path="/progress" component={ProgressPage} />
                <Route exact path="/modals" component={ModalPage} />
                <Route exact path="/forms" component={FormPage} />
                <Route exact path="/input-groups" component={InputGroupPage} />
                <Route exact path="/charts" component={ChartPage} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
        
      </HashRouter>
      {/* <Button color="danger" onClick={toggle}>modall</Button> */}
      <Modal isOpen={this.state.modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
