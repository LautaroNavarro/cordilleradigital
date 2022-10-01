import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 500px;
	position: relative;
	background-image: url(${({image}) => image});
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
  @media (max-width: ${({theme}) => theme.sizes.tablet}) {
    background-size: cover;
  }
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
  flex-direction: row;
  @media (max-width: ${({theme}) => theme.sizes.tablet}) {
    flex-direction: column;
  }
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;
`;

const MainImage = ({backgroundImage, title, secondTitle}) => {
	return (
		<Container image={backgroundImage} id='Home'>
			<TitleContainer>
				<Title>{title}&nbsp;</Title><TitleThin>{secondTitle}</TitleThin>
			</TitleContainer>
		</Container>
	);
};

export default MainImage;
