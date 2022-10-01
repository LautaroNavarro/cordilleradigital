import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faArrowsRotate, faPalette, faBookOpen, faCircleArrowDown, faGlobe, faMoon, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

import {Title, TitleContainer, TitleThin, Line} from './../Title/Title';
import Spacer from './../Spacer/Spacer';
import Carousel from './../Carousel/Carousel';
import Row from './../Row/Row';
import WidthContainer from './../WidthContainer/WidthContainer';


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

const StyledRow = styled(Row)`
  @media (max-width: ${({theme}) => theme.sizes.tablet}) {
    flex-direction: column;
  }
  align-items: center;
`;

const SectionContainer = styled(WidthContainer)`
  width: 50%;
  @media (max-width: ${({theme}) => theme.sizes.tablet}) {
    width: 100%;
    margin-top: 50px;
  }
`;

const TwoColumnsSection = ({
  titleOne='APP',
  titleTwo='SCREENSHOTS',
  screenShots=[],
  items=[],
  idParameter='',
}) => {
	return (
		<Container>
			<WidthContainer>
			<Spacer height={30}/>
			<TitleContainer>
				<Line />
				<Title  id={idParameter} left fontSize={20}>{titleOne}</Title><TitleThin right fontSize={20}>&nbsp;{titleTwo}</TitleThin>
				<Line />
			</TitleContainer>
			<Spacer height={30}/>
			<StyledRow>
				<SectionContainer width={'50%'}>
					<WidthContainer width={'90%'}>
						<Carousel list={screenShots.map(screenShot => <Image src={screenShot} />)}/>
					</WidthContainer>
				</SectionContainer>
				<SectionContainer width={'50%'}>
					<WidthContainer width={'90%'}>
            {
              items.map(item => {

                let itemComponent = (
                  <Row style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                    <IconContainer>
                      <FontAwesomeIcon icon={item.icon} size="1x" inverse/>
                    </IconContainer>
                    <WidthContainer width={'95%'}>
                      <LocalTitle>{item.title}</LocalTitle>
                      <LocalDescription>{item.description}</LocalDescription>
                    </WidthContainer>
                  </Row>
                );

                if (item.href) {
                  return <a href={item.href}>{itemComponent}</a>
                }

                return itemComponent;
              })
            }
					</WidthContainer>
				</SectionContainer>
			</StyledRow>
			<Spacer height={100}/>
			</WidthContainer>
		</Container>
	);
};

export default TwoColumnsSection;
