import React from 'react';
import styled from 'styled-components';

import backgroundImage from './../../assets/background.webp';

const Container = styled.div`
	width: 100%;
	height: 500px;
	position: relative;
	background-image: url(${({image}) => image});
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const Title = styled.p`
	color: ${({theme}) => theme.colors.text};
	text-transform: uppercase;
	font-size: 60px;
	font-weight: bold;
`;

const TitleThin = styled(Title)`
	font-weight: 100;
`;

const TitleContainer = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;
`;

const MainImage = () => {
	return (
		<Container image={backgroundImage} id='Home'>
			<TitleContainer>
				<Title>Voley&nbsp;</Title><TitleThin>Scoreboard</TitleThin>
			</TitleContainer>
		</Container>
	);
};

export default MainImage;
