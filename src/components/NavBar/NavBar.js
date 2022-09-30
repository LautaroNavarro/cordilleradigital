import React from 'react';
import styled from 'styled-components';

import background from './../../assets/background.webp';
import logo from './../../assets/logo.png'
import WidthContainer from './../WidthContainer/WidthContainer';
import Row from './../Row/Row';

const Container = styled.div`
	height: 80px;
	background-color: ${({theme}) => theme.colors.background};
`;

const Logo = styled.img`
	width: 40px;
	height: 40px;
`;

const Background = styled.img`
	width: 100vw;
	height: 500px;
	object-fit: cover;
	-webkit-filter: blur(10px);
	-moz-filter: blur(10px);
	-o-filter: blur(10px);
	-ms-filter: blur(10px);
	filter: blur(10px);
	position: absolute;
	opacity: 0.2;
`;

const StyledRow = styled(Row)`
	align-items: center;
`;

const ContainerInner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	position: static;
`;

const Title = styled.p`
	color: ${({theme}) => theme.colors.text};
	text-transform: uppercase;
	margin-left: 10px;
`;

const Link = styled.a`
	color: ${({theme, selected}) => selected ? theme.colors.text : theme.colors.text};
	text-transform: uppercase;
	margin: 0px 10px;
	cursor: pointer;
	text-decoration: none;
`;

const RightItems = styled.div`
	margin-left: auto;
`;

const NavBar = () => {
	return (
		<Container>
			<ContainerInner>
				<WidthContainer>
					<StyledRow>
						<StyledRow>
							{/*<Logo src={logo} />*/}
							<Title>Voley score board</Title>
						</StyledRow>
						<RightItems>
							<StyledRow>
								<Link href="#Home" >Home</Link>
								<Link href="#PrivacyPolicy" >Privacy</Link>
								<Link href="#Support" >Support</Link>
							</StyledRow>
						</RightItems>
					</StyledRow>
				</WidthContainer>
			</ContainerInner>
		</Container>
	);
};

export default NavBar;
