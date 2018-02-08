import styled from 'styled-components';

const LayoutWrapper = styled.div`

	.adminLayout{
		overflow-x: hidden !important;
		.trigger{
			padding:0px 0 0 166px;
			cursor:pointer;
			transition: color 0.3s;
		}
		.mainContent{
			margin: 80px 15px 10px 15px;
			padding: 15px;
			background: #fff;
		}
	}
`;

export default LayoutWrapper;