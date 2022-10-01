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

const PrivacyPolicy = ({
  titleOne='Privacy',
  titleTwo='Policy',
  title='We collect no personal information using our application',
  policyTexts=[],
}) => {
	return (
		<Container>
			<WidthContainer>
				<Spacer height={30}/>
				<TitleContainer>
					<Line />
					<Title id='PrivacyPolicy' left fontSize={20}>{titleOne}</Title><TitleThin right fontSize={20}>&nbsp;{titleTwo}</TitleThin>
					<Line />
				</TitleContainer>
				<div>
					<Title>{title}</Title>
					<Spacer height={20}/>
          {
            policyTexts.map(policyText => <PolicyText>{policyText}</PolicyText>)
          }
				</div>
				<Spacer height={60}/>
			</WidthContainer>
		</Container>
	);
};

export default PrivacyPolicy;
