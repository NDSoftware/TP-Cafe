import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import './scss/style.scss'
import 'font-awesome/css/font-awesome.min.css';
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";
import store from "./store";
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
      <Provider store={store}>
        <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
              {/*<Route
                exact
                path="/register"
                name="Register Page"
                render={(props) => <Register {...props} />}
              />*/}
              <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
              <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
              <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
        <ToastContainer />
      </Provider>
    )
  }
}

export default App
