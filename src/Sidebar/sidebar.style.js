import styled from 'styled-components';
import { palette } from 'styled-theme';

const SidebarWrapper = styled.div`
  .ant-layout-sider{
  	background:#fff;
  	height:100%;
    overflow:hidden;
  	.logo{
  		height:30px;
  		margin:15px;
  	}
    .scrollbar{
      height:calc(100% - 100px);
      width:220px;
      overflow-x:hidden !important;
    }
  	.ant-menu{
  		border-right:0px;
  	}
  }
`;

export default SidebarWrapper;