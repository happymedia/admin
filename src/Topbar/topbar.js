import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import TopbarWrapper from '../Topbar/topbar.style';
import TopbarSearch from '../Topbar/topbarSearch';
import TopbarNotification from '../Topbar/topbarNotification';

const { Header } = Layout;

export default class Topbar extends Component {
  state = {
    collapsed: false,
  };


  render() {
    const collapsed = this.props.collapsed;
    const styling = {
      background: '#1e88e5',
      position: 'fixed',
      width: '100%',
      height: 70
    };

    return (
      <TopbarWrapper>
       <Header className='adminAPPHeader'>
          <Icon
            className="trigger"
            style={{padding:`${collapsed ? "0px 0 0 44px":"0px 0 0 166px"}`}}
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.props.toggle}
          />
          <ul className="floatRight">
            <li>
              <TopbarSearch/>
            </li>
            <li>
              <TopbarNotification/>
            </li>
          </ul>
        </Header>
      </TopbarWrapper>
    );
  }
}

