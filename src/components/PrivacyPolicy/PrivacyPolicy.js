import React from 'react';
import styled from 'styled-components';

import {Title, TitleContainer, TitleThin, Line} from './../Title/Title';
import WidthContainer from './../WidthContainer/WidthContainer';
import Spacer from './../Spacer/Spacer';

const Container = styled.div`
	background-color: ${({theme}) => theme.colors.background};
`;

const PolicyText = styled.p`
	text-align: center;
	color: ${({theme}) => theme.colors.text};
`;

const PrivacyPolicy = () => {
	return (
		<Container>
			<WidthContainer>
				<Spacer height={30}/>
				<TitleContainer>
					<Line />
					<Title id='PrivacyPolicy' left fontSize={20}>Privacy</Title><TitleThin right fontSize={20}>&nbsp;Policy</TitleThin>
					<Line />
				</TitleContainer>
				<div>
					<Title>We collect no personal information using our application</Title>
					<Spacer height={20}/>
					<PolicyText>We do not collect, use, save, or have access to any of your personal data recorded in VoleyScoreBoard for iOS.</PolicyText>
					<PolicyText>
						Individual settings relating to the VoleyScoreBoard app are not personal and are stored only on your Device.
					</PolicyText>
				</div>
				<Spacer height={60}/>
			</WidthContainer>
		</Container>
	);
};

export default PrivacyPolicy;
