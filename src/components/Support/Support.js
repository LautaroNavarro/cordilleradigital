import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import {Title, TitleContainer, TitleThin, Line} from './../Title/Title';
import WidthContainer from './../WidthContainer/WidthContainer';
import Spacer from './../Spacer/Spacer';
import Column from './../Column/Column';

const Container = styled.div`
	background-color: ${({theme}) => theme.colors.backgroundTwo};
`;

const PolicyText = styled.p`
	color: ${({theme}) => theme.colors.text};
`;

const PolicyTitle = styled.p`
	color: ${({theme}) => theme.colors.text};
	text-transform: uppercase;
	font-weight: bold;
	cursor: pointer;
	&:hover {
		color: ${({theme}) => theme.colors.backgroundThree};
	}
`;

const TextContainer = styled.div`
	display: flex;
	justify-content: flex-start;
`;

const SupportInstruction = ({title, description}) => {
	const [opened, setOpened] = useState(false);

	return (
		<div>
			<PolicyTitle onClick={() => {setOpened(!opened)}}><FontAwesomeIcon icon={faArrowRight} size="s" inverse/>&nbsp;{title}</PolicyTitle>
			<Spacer height={10}/>
			{
				opened && (
					<PolicyText>{description}</PolicyText>
				)
			}
			<Spacer height={30}/>
		</div>
	);
}

const Support = ({
  items=[]
}) => {
	return (
		<Container>
			<WidthContainer>
				<Spacer height={30}/>
				<TitleContainer>
					<Line />
					<Title id='Support' left right fontSize={20}>Support</Title>
					<Line />
				</TitleContainer>
				<WidthContainer width={80}>
          {
            items.map(item => (
              <SupportInstruction
                title={item.title}
                description={item.description}
              />
            ))
          }
				</WidthContainer>
				<Spacer height={60}/>
			</WidthContainer>
		</Container>
	);
};

export default Support;
