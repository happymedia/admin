import React, { Component } from 'react';
import Notify from '../lib/notify/notify';

export default class TopbarNotification extends Component { 

  render() {
    return (
      <div>
        <i className="ion-android-notifications"></i>
        <Notify />
      </div>
    );
  }
}