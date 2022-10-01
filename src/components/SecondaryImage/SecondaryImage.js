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
`;

const SecondaryImage = ({backgroundImage}) => {
	return (
		<Container image={backgroundImage} />
	);
};

export default SecondaryImage;
