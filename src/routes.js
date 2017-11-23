import React from 'react'
//import { Route, IndexRoute } from 'react-router'
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Router, Route } from 'react-router'
import IndexPage from './App';
import Page2 from './components/Page2';
import NotFoundPage from './components/NotFoundPage';

const routes = (
    <Router>
        <div>
            <Route exact path="/" component={IndexPage}/>
            <Route path="app" component={Page2}/>
            <Route path="*" component={NotFoundPage}/>
        </div>
    </Router>
    /*<Route path="/" component={IndexPage}>
    <div>
        <IndexRoute component={IndexPage}/>
        <Route path="app" component={Page2}/>
        <Route path="*" component={NotFoundPage}/>
    </div>
  </Route>*/
);

export default routes;