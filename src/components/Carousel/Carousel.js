import React, {useState} from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Container = styled.div`
	justify-content: center;
	margin: auto;
	align-items: center;
`;


const ItemContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const Carousel = ({list}) => {

	return (
		<Container>
			<Splide>
				{
					list.map((item) => (
						<SplideSlide>
							<ItemContainer>
								{item}
							</ItemContainer>
						</SplideSlide>
					))
				}
			</Splide>
		</Container>
	);

};

export default Carousel;
