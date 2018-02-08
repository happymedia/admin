import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
	{
		from{
			-webkit-transform: rotate(0deg);
			-moz-transform: rotate(0deg);
			-o-transform: rotate(0deg);
			transform: rotate(0deg);
		}
   		to{
   			-webkit-transform: rotate(360deg);
			-moz-transform: rotate(360deg);
			-o-transform: rotate(360deg);
			transform: rotate(360deg);
   		}
	}
`
const SettingWrapper = styled.div`
  .setting{
  	position:fixed;
  	bottom:20px;
  	right:20px;
	background:rgba(0,0,0,.6);
	border-radius:50%;
	padding:26px;
	cursor:pointer;
	&:hover{
		background:rgba(0,0,0,.5);
	}
	i{
		-moz-animation: ${rotate} 1s linear;
		-moz-animation-iteration-count: infinite;
		-o-animation: ${rotate} 2s linear;
		-o-animation-iteration-count: infinite;
		-webkit-animation: ${rotate} 2s linear;
		-webkit-animation-iteration-count: infinite;
		animation-iteration-count: infinite;
		color:rgba(255,255,255, .8);
		font-size:22px;
	    position: absolute;
	    top: 15px;
	    left: 15px;
	}
  }
`;

export default SettingWrapper;
