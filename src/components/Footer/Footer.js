import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin-top: auto;
	background-color: ${({theme}) => theme.colors.background};
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
`;

const Text = styled.p`
	color: ${({theme}) => theme.colors.text};
`;

const Footer = () => {
	return (
		<Container>
			<Text>cordilleradigital.com</Text>
		</Container>
	);
};

export default Footer;
