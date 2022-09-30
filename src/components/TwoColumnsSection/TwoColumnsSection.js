import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faArrowsRotate, faPalette, faBookOpen, faCircleArrowDown, faGlobe, faMoon, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

import {Title, TitleContainer, TitleThin, Line} from './../Title/Title';
import Spacer from './../Spacer/Spacer';
import Carousel from './../Carousel/Carousel';
import Row from './../Row/Row';
import WidthContainer from './../WidthContainer/WidthContainer';
import screenShot1 from './../../assets/screenshot-1.png';
import screenShot2 from './../../assets/screenshot-2.png';
import screenShot3 from './../../assets/screenshot-3.png';
import screenShot4 from './../../assets/screenshot-4.png';


const Container = styled.div`
	background-color: ${({theme}) => theme.colors.backgroundTwo};
`;

const Image = styled.img`
	width: 50%;
`;

const LocalTitle = styled.h2`
	color: ${({theme}) => theme.colors.text};
	font-size: 19px;
	text-transform: uppercase;
`;

const LocalDescription = styled.p`
	color: ${({theme}) => theme.colors.textTwo};
	margin-top: 5px;
	font-weight: 200;
	margin-bottom: 40px;
`;

const IconContainer = styled(WidthContainer)`
	width: 5%;
	margin-top: 3.5px;
	display: flex;
	justify-content: center;
	align-items: center;
`;


const TwoColumnsSection = () => {
	return (
		<Container>
			<WidthContainer>
			<Spacer height={30}/>
			<TitleContainer>
				<Line />
				<Title left fontSize={20}>APP</Title><TitleThin right fontSize={20}>&nbsp;SCREENSHOTS</TitleThin>
				<Line />
			</TitleContainer>
			<Spacer height={30}/>
			<Row style={{alignItems: 'center'}}>
				<WidthContainer width={'50%'}>
					<WidthContainer width={'90%'}>
						<Carousel list={[
							<Image src={screenShot1}/>,
							<Image src={screenShot2}/>,
							<Image src={screenShot3}/>,
							<Image src={screenShot4}/>,
						]}/>
					</WidthContainer>
				</WidthContainer>
				<WidthContainer width={'50%'}>
					<WidthContainer width={'90%'}>
						<Row style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
							<IconContainer>
								<FontAwesomeIcon icon={faLanguage} size="1x" inverse/>
							</IconContainer>
							<WidthContainer width={'95%'}>
								<LocalTitle>Multiple languages</LocalTitle>
								<LocalDescription>You are gonna be able to switch between different languages, like English and Spanish, more in the way.</LocalDescription>
							</WidthContainer>
						</Row>
						<Row style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
							<IconContainer>
								<FontAwesomeIcon icon={faArrowsRotate} size="1x" inverse/>
							</IconContainer>
							<WidthContainer width={'95%'}>
								<LocalTitle>Switchable team positions</LocalTitle>
								<LocalDescription>The set finished and the team switch positions? No problem, you can also switch them.</LocalDescription>
							</WidthContainer>
						</Row>
						<Row style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
							<IconContainer>
								<FontAwesomeIcon icon={faPalette} size="1x" inverse/>
							</IconContainer>
							<WidthContainer width={'95%'}>
								<LocalTitle>Customizable matches</LocalTitle>
								<LocalDescription>Set the name of the teams, the colors and even the match sets.</LocalDescription>
							</WidthContainer>
						</Row>
						<Row style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
							<IconContainer>
								<FontAwesomeIcon icon={faBookOpen} size="1x" inverse/>
							</IconContainer>
							<WidthContainer width={'95%'}>
								<LocalTitle>Match summary</LocalTitle>
								<LocalDescription>See the summary of the match, set by set, point by point.</LocalDescription>
							</WidthContainer>
						</Row>
						<Row style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
							<IconContainer>
								<FontAwesomeIcon icon={faCircleArrowDown} size="1x" inverse/>
							</IconContainer>
							<WidthContainer width={'95%'}>
								<LocalTitle>Local match</LocalTitle>
								<LocalDescription>Play your own private match wherever you want, without needing internet connection.</LocalDescription>
							</WidthContainer>
						</Row>
						<Row style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
							<IconContainer>
								<FontAwesomeIcon icon={faGlobe} size="1x" inverse/>
							</IconContainer>
							<WidthContainer width={'95%'}>
								<LocalTitle>Online match</LocalTitle>
								<LocalDescription>Share your match in real time with your friends with the access code.</LocalDescription>
							</WidthContainer>
						</Row>
						<Row style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
							<IconContainer>
								<FontAwesomeIcon icon={faMoon} size="1x" inverse/>
							</IconContainer>
							<WidthContainer width={'95%'}>
								<LocalTitle>Dark mode</LocalTitle>
								<LocalDescription>Nice and clean, switchable dark and light modes.</LocalDescription>
							</WidthContainer>
						</Row>
						<Row style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
							<IconContainer>
								<FontAwesomeIcon icon={faVolumeHigh} size="1x" inverse/>
							</IconContainer>
							<WidthContainer width={'95%'}>
								<LocalTitle>Sounds</LocalTitle>
								<LocalDescription>Sounds for match controlls, in both online and offline modes.</LocalDescription>
							</WidthContainer>
						</Row>
					</WidthContainer>
				</WidthContainer>
			</Row>
			<Spacer height={100}/>
			</WidthContainer>
		</Container>
	);
};

export default TwoColumnsSection;
