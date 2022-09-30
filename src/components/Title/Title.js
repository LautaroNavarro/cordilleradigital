import styled from 'styled-components';

export const TitleContainer = styled.div`
	width: 100%;
	padding: 30px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const Line = styled.div`
	height: 1px;
	width: 100%;
	padding: 0px 20px;
	background-color: ${({theme}) => theme.colors.text};
	opacity: 0.2;
`;

export const Title = styled.p`
	color: ${({theme}) => theme.colors.text};
	text-transform: uppercase;
	font-size: ${({fontSize}) => fontSize}px;
	font-weight: bold;
	text-align: center;
	${({right}) => right && `
		margin-right: 20px;
	`}
	${({left}) => left && `
		margin-left: 20px;
	`}
`;

export const TitleThin = styled(Title)`
	font-weight: 100;
`;

