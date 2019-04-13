import React from 'react';

import {
  Route,
  Switch,
  withRouter,
  BrowserRouter
} from 'react-router-dom';

import './index.css';
import {RouterConfig} from './RouteConfig';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const DEFAULT_SCENE_CONFIG = {
  enter: 'from-right',
  exit: 'to-exit'
};

const getSceneConfig = location => {
  const matchedRoute = RouterConfig.find(config => new RegExp(`^${config.path}$`).test(location.pathname));
  return (matchedRoute && matchedRoute.sceneConfig) || DEFAULT_SCENE_CONFIG;
};

let oldLocation = null;
const Routes = withRouter(({location, history}) => {

  // 转场动画应该都是采用当前页面的sceneConfig，所以：
  // push操作时，用新location匹配的路由sceneConfig
  // pop操作时，用旧location匹配的路由sceneConfig
  let classNames = '';
  if(history.action === 'PUSH') {
    classNames = 'forward-' + getSceneConfig(location).enter;
  } else if(history.action === 'POP' && oldLocation) {
    classNames = 'back-' + getSceneConfig(oldLocation).exit;
  }

  // 更新旧location
  oldLocation = location;

  return (
    <TransitionGroup
      className={'router-wrapper'}
      childFactory={child => React.cloneElement(child, {classNames})}
    >
      <CSSTransition timeout={500} key={location.pathname}>
        <Switch location={location}>
          {RouterConfig.map((config, index) => (
            <Route exact key={index} {...config}/>
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});

export default class App4 extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    );
  }
}