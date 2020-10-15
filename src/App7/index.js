import React, { lazy, Suspense } from 'react';

import {
  Route,
  Switch,
  withRouter,
  BrowserRouter
} from 'react-router-dom';
import { Spin } from 'antd'
import './index.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { HomePage, AboutPage } from '../Pages/index';
const DetailPage = lazy(() => import('../Pages/DetailPage'))
const ListPage = lazy(async () => {
  await new Promise(resolve => window.setTimeout(resolve, 3000))
  return import('../Pages/ListPage')
})

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
      timeout={6000}
      key={location.pathname}
      onEnter={() => console.log('onEnter')}
      onEntered={() => console.log('onEntered')}
      onExit={() => console.log('onExit')}
      onExited={() => console.log('onExited')}
    >
      <div className=''>
        <Suspense fallback={<Spin/>}>
          <Switch location={location}>
            <Route exact path={'/'} component={HomePage} />
            <Route exact path={'/about'} component={AboutPage} />
            <Route exact path={'/list'} render={props => <ListPage {...props}/>} />
            <Route exact path={'/detail'} render={props => <DetailPage {...props}/>}/>
          </Switch>
        </Suspense>
      </div>
    </CSSTransition>
  </TransitionGroup>
));


export default () => <BrowserRouter hashType="noslash">
  <Routes/>
</BrowserRouter>