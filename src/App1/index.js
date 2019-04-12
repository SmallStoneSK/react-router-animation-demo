import React from 'react';

import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';

import {HomePage, AboutPage, ListPage, DetailPage} from '../Pages/index';

export default class App1 extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={HomePage}/>
          <Route exact path={'/about'} component={AboutPage}/>
          <Route exact path={'/list'} component={ListPage}/>
          <Route exact path={'/detail'} component={DetailPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}