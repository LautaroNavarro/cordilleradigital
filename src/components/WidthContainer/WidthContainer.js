import styled from 'styled-components';

const WidthContainer = styled.div`
	width: 95%;
	margin: 0px auto;
	${({width}) => width && `
		width: ${width}%;
	`}
`;

export default WidthContainer;
