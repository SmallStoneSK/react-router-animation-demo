import React from 'react';

import './index.css';
import {Button} from 'antd';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export default class App3 extends React.PureComponent {

  state = {num: 0};

  onToggle = () => this.setState({num: (this.state.num + 1) % 2});

  render() {
    const {num} = this.state;
    return (
      <div className={'container'}>
        <TransitionGroup className={'square-wrapper'}>
          <CSSTransition
            key={num}
            timeout={500}
            classNames={'fade'}
          >
            <div className={'square'}>{num}</div>
          </CSSTransition>
        </TransitionGroup>
        <Button onClick={this.onToggle}>toggle</Button>
      </div>
    );
  }
}