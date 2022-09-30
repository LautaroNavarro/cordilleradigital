import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faVolumeHigh, faGlobe, faBellConcierge } from '@fortawesome/free-solid-svg-icons'

import {Title, TitleContainer, TitleThin, Line} from './../Title/Title';
import Spacer from './../Spacer/Spacer';
import WidthContainer from './../WidthContainer/WidthContainer';
import backgroundImage from './../../assets/background.webp';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 900px) {
      flex-direction: column;
    }    
`;

const BoxContainer = styled.div`
    width: 24%;
    @media (max-width: 900px) {
      width: 100%;
      margin-top: 20px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


const Box = ({icon, title, description}) => {

    const ImageContainer = styled.div`
        width: 10vw;
        height: 10vw;
        border-radius: 10vw;
        @media (max-width: 600px) {
            width: 30vw;
            height: 30vw;
            border-radius: 30vw;
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
        border-radius: 10vw;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10vw;
        font-size: 4vw;
        height: 10vw;
        @media (max-width: 600px) {
            width: 30vw;
            height: 30vw;
            border-radius: 30vw;
            font-size: 15vw;
        }
    `;

    return (
        <BoxContainer>
            <ImageContainer>
                <ImageOverlay>
                    <FontAwesomeIcon icon={icon} inverse/>
                </ImageOverlay>
            </ImageContainer>
            <Spacer height={30}/>
            <Title>{title}</Title>
            <Spacer height={10}/>
            <TitleThin>{description}</TitleThin>
        </BoxContainer>
    );
};

const Boxes = () => {
    return (
        <WidthContainer>
            <Spacer height={30}/>
            <TitleContainer>
                <Line />
                <Title left fontSize={20}>WHAT</Title><TitleThin right fontSize={20}>&nbsp;WE&nbsp;DO?</TitleThin>
                <Line />
            </TitleContainer>
            <Container>
                <Box title={'Online'} description={'Online real time matches. Available everywhere'} icon={faGlobe}/>
                <Box title={'Dark mode'} description={'Nice and clean, switchables dark and light modes'} icon={faMoon}/>
                <Box title={'Sounds'} description={'Sounds for score board controls in both, online and offline mode'} icon={faVolumeHigh}/>
                <Box title={'Support'} description={'Active development team to support bugs fixing and new features requests'} icon={faBellConcierge}/>
            </Container>
            <Spacer height={100}/>
        </WidthContainer>
    );
};

export default Boxes;
