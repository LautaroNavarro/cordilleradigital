import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {Title, TitleContainer, TitleThin, Line} from './../Title/Title';
import Spacer from './../Spacer/Spacer';
import WidthContainer from './../WidthContainer/WidthContainer';

const Container = styled.div`
	width: 100%;
	display: flex;
  @media (max-width: ${({theme}) => theme.sizes.tablet}) {
    flex-direction: column;
  }
	justify-content: space-between;
`;

const BoxContainer = styled.div`
	width: 24%;
  @media (max-width: ${({theme}) => theme.sizes.tablet}) {
    width: 100%;
    margin-top: 20px;
  }
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;


const Box = ({icon, title, description, backgroundImage}) => {

	const ImageContainer = styled.div`
		width: 10vw;
		height: 10vw;
		border-radius: 10vw;
    @media (max-width: ${({theme}) => theme.sizes.tablet}) {
      width: 30vw;
      height: 30vw;
      border-radius: 30vw;
			background-attachment: scroll;
    }
		background-image: url(${backgroundImage});
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
	`;

	const ImageOverlay = styled.div`
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
    border-radius: 10vw;
		width: 10vw;
		height: 10vw;
    @media (max-width: ${({theme}) => theme.sizes.tablet}) {
      width: 30vw;
      height: 30vw;
      border-radius: 30vw;
    }
	`;

	return (
		<BoxContainer>
			<ImageContainer>
				<ImageOverlay>
					<FontAwesomeIcon icon={icon} size="3x" inverse/>
				</ImageOverlay>
			</ImageContainer>
			<Spacer height={30}/>
			<Title>{title}</Title>
			<Spacer height={10}/>
			<TitleThin>{description}</TitleThin>
		</BoxContainer>
	);
};

const Boxes = ({nameOne, nameTwo, nameThree, boxes, backgroundImage}) => {
	return (
		<WidthContainer>
			<Spacer height={30}/>
			<TitleContainer>
				<Line />
				<Title left fontSize={20}>WHAT</Title><TitleThin right fontSize={20}>&nbsp;WE&nbsp;DO?</TitleThin>
				<Line />
			</TitleContainer>
			<Container>
        {
          boxes.map(box => <Box backgroundImage={backgroundImage} title={box.title} description={box.description} icon={box.icon}/>)
        } 
			</Container>
			<Spacer height={100}/>
		</WidthContainer>
	);
};

export default Boxes;
