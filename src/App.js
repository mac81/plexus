import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";

import appStore from "./store/appStore";

// Pages
import {
  // About,
  // Article,
  // Contact,
  // Doctor,
  // Employee,
  Frontpage,
  // NoMatch,
  // Prices,
  // Service,
  Training
  // Treatment,
  // Treatments
} from "./pages";

import Header from "./components/Header/Header";

// const ReactGA = require('react-ga');
// ReactGA.initialize('UA-86523189-1');

const store = appStore();

// const onRouteUpdate = () => {
//     // ReactGA.set({ page: window.location.pathname });
//     // ReactGA.pageview(window.location.pathname);
//     window.scrollTo(0, 0);
// }
//
// const handleOnEnterPage = (page, contentType) => {
//     store.dispatch(fetchPage(page, contentType));
// }
//
// const handleOnEnterSingleItem = (e, entry) => {
//     const state = store.getState();
//     const id = e.params.id;
//
//     if(!state.pages[state.activePage]) {
//         store.dispatch(fetchEntry(entry, id));
//     }
//
//     store.dispatch({
//         type: 'SET_ACTIVE_ENTRY',
//         id: id,
//         solidMenu: true
//     });
// }
//
// const handleOnLeaveSingleItem = () => {
//     store.dispatch({
//         type: 'SET_ACTIVE_ENTRY',
//         id: null
//     });
// }
//
// const handleOnEnterTreatment = (e) => {
//     if(!store.getState().pages.treatments) {
//         store.dispatch(fetchPage('treatments', 'sideBehandlingstilbud'));
//     }
//
//     store.dispatch({
//         type: 'SET_ACTIVE_ENTRY',
//         id: e.params.id,
//         solidMenu: true
//     });
// }

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div id="container">
            <Header />
            <Switch>
              <Route exact path={`/`} component={Frontpage} />
              <Route path={`/trening`} component={Training} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
