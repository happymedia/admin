import React, { Component } from 'react';
import {Layout, Menu, Icon, Button } from 'antd';

import LayoutWrapper from './adminApp.Style';
import { ThemeProvider } from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

import Topbar from  './Topbar/topbar';
import Sidebar from  './Sidebar/sidebar';
import Setting from  './lib/setting/setting';

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

export default class AdminApp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    }
  }

  toggleSiderbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (    	
    	<ThemeProvider theme={{color:'#1e88e5'}}>
	      <LayoutWrapper>
	        <Layout style={{ height: '100vh' }} className="adminLayout">
	          <Topbar collapsed={this.state.collapsed} toggle={this.toggleSiderbar} />
	        	<Layout>
	              <Sidebar collapsed={this.state.collapsed}/>
	              <Layout>
	                <Content className="mainContent">
	                    
	                </Content>
	                <Setting/>
	              </Layout>
	          </Layout>
	        </Layout>
	      </LayoutWrapper>
      </ThemeProvider>
    );
  }
}
