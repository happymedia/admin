import styled, {keyframes} from 'styled-components';

const heartbit = keyframes`
    0%{
      -moz-transform:scale(0);
      -webkit-transform:scale(0);
      opacity:0.0;
    }
    5%{
      -moz-transform:scale(0.1);
      -webkit-transform:scale(0.1);
      opacity:0.1;
    }
    50%{
      -moz-transform:scale(0.5);
      -webkit-transform:scale(0.5);
      opacity:0.3;
    }
    75%{
      -moz-transform:scale(0.8);
      -webkit-transform:scale(0.8);
      opacity:0.5;
    }
    to{
      -moz-transform:scale(1);
      -webkit-transform:scale(1);
      opacity:0.0;
    }
`;

const NotifyWrapper = styled.div`
  .notify{
    position: relative;
    top: -22px;
    right: -9px;
    .heartbit{
      position: absolute;
      top: -35px;
      right: -2px;
      height: 25px;
      width: 25px;
      z-index: 10;
      border: 5px solid #ef5350;
      border-radius: 70px;
      -moz-animation: ${heartbit} 1s ease-out;
      -moz-animation-iteration-count: infinite;
      -o-animation: ${heartbit} 1s ease-out;
      -o-animation-iteration-count: infinite;
      -webkit-animation: ${heartbit} 1s ease-out;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
    }
    .point{
      width: 6px;
      height: 6px;
      -webkit-border-radius: 30px;
      -moz-border-radius: 30px;
      border-radius: 30px;
      background-color: #ef5350;
      position: absolute;
      right: 8px;
      top: -25px;
    }
  }
`;

export default NotifyWrapper;
