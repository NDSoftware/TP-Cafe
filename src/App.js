import React, { Component } from 'react'
import {Route, Switch, HashRouter, Redirect} from 'react-router-dom'
import './scss/style.scss'
import 'font-awesome/css/font-awesome.min.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={(props) =>
                !localStorage.getItem("token") ? (
                  <Login {...props}  />
                ) : (
                  <Redirect to="/" />
                )}
              />
              <Route exact path="/forgot-password" name="Forgot Password Page" render={(props) =>
                !localStorage.getItem("token") ? (
                  <Login {...props}  />
                ) : (
                  <Redirect to="/" />
                )}
              />
              <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
              <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
              <Route path="/" name="Home" render={(props) =>
                !localStorage.getItem("token") ? (
                  <Redirect to="/login" />
                ) : (
                  <DefaultLayout {...props} />
                )}
              />
              {/*<Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />*/}
              {/*<Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />*/}
              {/*<Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />*/}
              {/*<Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />*/}
            </Switch>
          </React.Suspense>
        </HashRouter>
        <ToastContainer />
      </>
    )
  }
}

export default App
