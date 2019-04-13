import React from 'react';

import {
  Route,
  Switch,
  withRouter,
  BrowserRouter
} from 'react-router-dom';

import './index.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {HomePage, AboutPage, ListPage, DetailPage} from '../Pages/index';

const Routes = withRouter(({location}) => (
  <TransitionGroup className={'router-wrapper'}>
    <CSSTransition
      timeout={500}
      classNames={'fade'}
      key={location.pathname}
    >
      <Switch location={location}>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/about'} component={AboutPage} />
        <Route exact path={'/list'} component={ListPage} />
        <Route exact path={'/detail'} component={DetailPage} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default class App4 extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    );
  }
}