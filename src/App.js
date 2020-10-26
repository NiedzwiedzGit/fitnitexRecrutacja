import React, { Component } from 'react';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions/index';
import Logout from './containers/Auth/Logout/Logout';
// const postGalery = asyncComponent(() => {
//   return import('./components/ImagesBlock/ImagesBlockContent/ImagesBlockContent');

// });
const newsMedia = asyncComponent(() => {
  return import('./containers/NewsMedia/NewsMedia');
});
const Main = asyncComponent(() => {
  return import('./containers/Main/Main');
});
const Info = asyncComponent(() => {
  return import('./containers/Info/Info');
});
const Histories = asyncComponent(() => {
  return import('./containers/Histories/Histories');
});
const Contacts = asyncComponent(() => {
  return import('./containers/Contacts/Contacts');
});
const Clients = asyncComponent(() => {
  return import('./containers/Clients/Clients');
});
const Auth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    let routes = (
      < Switch >
        <AnimatedSwitch
          atEnter={{ opacity: 1 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route path={'/o nas'} exact component={newsMedia} />
          <Route path={'/aktualności'} component={Info} />
          <Route path={'/artykuly'} component={Histories} />
          <Route path={'/cetrum diagnoz'} component={Clients} />
          <Route path={'/nasi specjaliści'} component={Contacts} />
          <Route path={'/auth'} component={Auth} />
          <Route path="/logout" component={Logout} />

          {/* <Route path={'/postGalery/:id'} component={postGalery} /> */}
          <Route path="/" component={Main} />
          <Redirect to="/" />
        </AnimatedSwitch>
      </Switch >
    );
    console.log("test App");
    return (
      <div >
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}
const mapstateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const dispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};
export default withRouter(connect(mapstateToProps, dispatchToProps)(App));
