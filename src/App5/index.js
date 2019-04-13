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

const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back'
}

const Routes = withRouter(({location, history}) => (
  <TransitionGroup
    className={'router-wrapper'}
    childFactory={child => React.cloneElement(
      child,
      {classNames: ANIMATION_MAP[history.action]}
    )}
  >
    <CSSTransition
      timeout={500}
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