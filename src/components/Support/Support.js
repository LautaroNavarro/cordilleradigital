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

const Support = () => {
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
					<SupportInstruction
						title={'How to turn off sounds?'}
						description={'Drag from the left of the screen to the right to open the Drawer. Then search the toggle with the label "Sounds" and make sure it is off.'}
					/>
					<SupportInstruction
						title={'How to turn off dark mode?'}
						description={'Drag from the left of the screen to the right to open the Drawer. Then search the toggle with the label "Dark mode" and make sure it is off.'}
					/>
					<SupportInstruction
						title={'How to create a match?'}
						description={'In the home section click on "New Match" then configure your match with the desired sets, team names and colors and then click on "Create Match".'}
					/>
					<SupportInstruction
						title={'How to create an online match?'}
						description={'In the home section click on "New Match" then configure your match with the desired sets, team names and colors, then enable the "Online match" toggle and finally click on "Create Match".'}
					/>
					<SupportInstruction
						title={'How to join an online match?'}
						description={'In the home section, write down the access code of the match in the access code input and then click the "Join match" button.'}
					/>
					<SupportInstruction
						title={'How to share the access code of my online match?'}
						description={'In the match view, click on the access code, it will be copied automatically to your clipboard, then share it with your friends.'}
					/>
					<SupportInstruction
						title={'How to change the language?'}
						description={'Drag from the left of the screen to the right to open the Drawer. Then search the dropdown with the label "Language", there you will find a list of the available languages.'}
					/>
					<SupportInstruction
						title={'How to switch teams position?'}
						description={'In the match view, click the two arrows icon between the two score boards, it will switch the teams position.'}
					/>
				</WidthContainer>
				<Spacer height={60}/>
			</WidthContainer>
		</Container>
	);
};

export default Support;
