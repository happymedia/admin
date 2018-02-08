import React, { Component } from 'react';
import {Icon } from 'antd';
import SettingWrapper from './setting.style';

export default class Setting extends Component { 

  render() {
    return (
        <SettingWrapper>
          <div className="setting">
          	 <Icon type="setting" />
          </div>
        </SettingWrapper>
    );
  }
}