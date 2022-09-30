import {React} from 'react';
import styled from 'styled-components';

import MainImage from './../../components/MainImage/MainImage';
import SecondaryImage from './../../components/SecondaryImage/SecondaryImage';
import Boxes from './../../components/Boxes/Boxes';
import TwoColumnsSection from './../../components/TwoColumnsSection/TwoColumnsSection';
import PrivacyPolicy from './../../components/PrivacyPolicy/PrivacyPolicy';
import Support from './../../components/Support/Support';


const Home = () => {
	return (
		<>
			<MainImage />
			<Boxes />
			<TwoColumnsSection />
			<SecondaryImage />
			<PrivacyPolicy />
			<Support />
		</>
	);
};

export default Home;
