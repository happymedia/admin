import React, { Component } from 'react';
import NotifyWrapper from './notify.style';

export default class Notify extends Component { 

  render() {
    return (
        <NotifyWrapper>
          <div className="notify">
          	<span className="heartbit"></span>
          	<span className="point"></span>
          </div>
        </NotifyWrapper>
    );
  }
}