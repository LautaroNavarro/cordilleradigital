import React from 'react';
import styled from 'styled-components';

const LocalContainer = styled.div`
	display: flex;
	flex: 1;
	min-height: 100vh;
	flex-direction: column;
	background-color: ${({theme}) => theme.colors.background};
`;

const Container = ({children}) => {
	return (
		<LocalContainer>
			{children}
		</LocalContainer>
	);
};

export default Container;
