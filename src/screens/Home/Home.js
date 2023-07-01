import {React} from 'react';
import { faImage, faVolleyball, faDumbbell, faMobileScreen, faCode, faPaintBrush, faGamepad } from '@fortawesome/free-solid-svg-icons'

import MainImage from './../../components/MainImage/MainImage';
import SecondaryImage from './../../components/SecondaryImage/SecondaryImage';
import Boxes from './../../components/Boxes/Boxes';
import TwoColumnsSection from './../../components/TwoColumnsSection/TwoColumnsSection';
import ContactUs from './../../components/ContactUs/ContactUs';
import backgroundImage from './../../assets/cordilleradigitalbackground.webp';
import backgroundImageTwo from './../../assets/cordilleradigitalbackground2.webp';
import voleyscreenShot1 from './../../assets/voley-screenshot-1.webp';
import voleyscreenShot2 from './../../assets/voley-screenshot-2.webp';
import voleyscreenShot3 from './../../assets/voley-screenshot-3.webp';
import voleyscreenShot4 from './../../assets/voley-screenshot-4.webp';
import gtscreenShot1 from './../../assets/gt-screenshot-1.webp';
import gtscreenShot2 from './../../assets/gt-screenshot-2.webp';
import gtscreenShot3 from './../../assets/gt-screenshot-3.webp';
import gtscreenShot4 from './../../assets/gt-screenshot-4.webp';
import dubbzAppscreenShot1 from './../../assets/dubbz-app-1.webp';
import dubbzAppscreenShot2 from './../../assets/dubbz-app-2.webp';
import dubbzAppscreenShot3 from './../../assets/dubbz-app-3.webp';
import dubbzAppscreenShot4 from './../../assets/dubbz-app-4.webp';

const Home = () => {
	return (
		<>
			<MainImage backgroundImage={backgroundImage} title='Cordillera' secondTitle='Digital'/>
      <Boxes backgroundImage={backgroundImage} nameOne='What' nameTwo='We' nameThree='Do?' boxes={
        [
          {
            title: 'Backend',
            description: 'We develop and provide support for BE services',
            icon: faCode,
          },
          {
            title: 'Frontend',
            description: 'We develop and provide support for FE services',
            icon: faImage,
          },
          {
            title: 'Applications',
            description: 'We develop both Android and iOS applications',
            icon: faMobileScreen,
          },
          {
            title: 'Designs',
            description: 'We design your platform. Wherever you want it',
            icon: faPaintBrush,
          },
        ]
      }/>
			<TwoColumnsSection 
        titleOne='APPS'
        titleTwo='DEVELOPED'
        screenShots={[
          voleyscreenShot1,
          voleyscreenShot2,
          voleyscreenShot3,
          voleyscreenShot4,
          gtscreenShot1,
          gtscreenShot2,
          gtscreenShot3,
          gtscreenShot4,
          dubbzAppscreenShot1,
          dubbzAppscreenShot2,
          dubbzAppscreenShot3,
          dubbzAppscreenShot4,
        ]}
        items={[
          {
            icon: faVolleyball,
            title: 'Voley scoreboard',
            description: 'A voley scoreboard fully customizable with real time support',
            href: '/voley',
          },
          {
            icon: faDumbbell,
            title: 'Gym tracker',
            description: 'An application to help you workout and track your progress in the gym',
            href: '/gym-tracker',
          },
          {
            icon: faGamepad,
            title: 'Dubbz',
            description: 'Dubbz is a crypto based gaming wagering platform in where you can bet playing your favorites games.',
            href: 'https://dubbz.com',
          },
        ]}
        idParameter='#Apps'
      />
			<SecondaryImage backgroundImage={backgroundImageTwo}/>
      <ContactUs />
		</>
	);
};

export default Home;
