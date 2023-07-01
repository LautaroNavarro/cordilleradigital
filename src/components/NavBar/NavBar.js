import React from 'react';
import styled from 'styled-components';

import WidthContainer from './../WidthContainer/WidthContainer';
import Row from './../Row/Row';

const Container = styled.div`
	height: 80px;
	background-color: ${({theme}) => theme.colors.background};
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
  cursor: pointer;
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

  const clickLogo = () => {
    window.location.replace('/');
  }

	return (
		<Container>
			<ContainerInner>
				<WidthContainer>
					<StyledRow>
						<StyledRow>
							<Title onClick={clickLogo}>Cordillera Digital</Title>
						</StyledRow>
						<RightItems>
							<StyledRow>
								<Link href="/#Apps" >APPS</Link>
								<Link href="/#Contact" >CONTACT</Link>
							</StyledRow>
						</RightItems>
					</StyledRow>
				</WidthContainer>
			</ContainerInner>
		</Container>
	);
};

export default NavBar;
