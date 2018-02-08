import styled from 'styled-components';

const TopbarWrapper = styled.div`
  .adminAPPHeader{
    font-size:16px;
    background-color: ${props => props.theme.color};    
    color:#fff;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    i{
      font-size:24px;
    }
    .floatRight{
      float:right;
    }
    ul{
      margin:0;
      padding:0;
      list-style:none;
      li{
        float:left;
        padding:0 15px;        
      }
    }
  }
`;

export default TopbarWrapper;
