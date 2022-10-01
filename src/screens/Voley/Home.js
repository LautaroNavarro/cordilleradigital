import {React} from 'react';
import styled from 'styled-components';
import backgroundImage from './../../assets/voleybackground.webp';
import {
  faMoon,
  faLanguage,
  faArrowsRotate,
  faPalette,
  faVolumeHigh,
  faGlobe,
  faBellConcierge,
  faBookOpen,
  faCircleArrowDown,
 } from '@fortawesome/free-solid-svg-icons'

import MainImage from './../../components/MainImage/MainImage';
import SecondaryImage from './../../components/SecondaryImage/SecondaryImage';
import Boxes from './../../components/Boxes/Boxes';
import TwoColumnsSection from './../../components/TwoColumnsSection/TwoColumnsSection';
import PrivacyPolicy from './../../components/PrivacyPolicy/PrivacyPolicy';
import Support from './../../components/Support/Support';
import backgroundImageTwo from './../../assets/voleybackground2.webp';
import screenShot1 from './../../assets/voley-screenshot-1.png';
import screenShot2 from './../../assets/voley-screenshot-2.png';
import screenShot3 from './../../assets/voley-screenshot-3.png';
import screenShot4 from './../../assets/voley-screenshot-4.png';

const Home = () => {
  return (
    <>
      <MainImage backgroundImage={backgroundImage} title='Voley' secondTitle='scoreboard'/>
      <Boxes backgroundImage={backgroundImage} nameOne='What' nameTwo='We' nameThree='Do?' boxes={
        [
          {
            title: 'Online',
            description: 'Online real time matches. Available everywhere',
            icon: faGlobe,
          },
          {
            title: 'Dark mode',
            description: 'Nice and clean, switchables dark and light modes',
            icon: faMoon,
          },
          {
            title: 'Sounds',
            description: 'Sounds for score board controls in both, online and offline mode',
            icon: faVolumeHigh,
          },
          {
            title: 'Support',
            description: 'Active development team to support bugs fixing and new features requests',
            icon: faBellConcierge,
          },
        ]
      }/>
      <TwoColumnsSection 
        titleOne='APP'
        titleTwo='SCREENSHOTS'
        screenShots={[
          screenShot1,
          screenShot2,
          screenShot3,
          screenShot4,
        ]}
        items={[
          {
            icon: faLanguage,
            title: 'Multiple languages',
            description: 'You are gonna be able to switch between different languages, like English and Spanish, more in the way.',
          },
          {
            icon: faArrowsRotate,
            title: 'Switchable team positions',
            description: 'The set finished and the team switch positions? No problem, you can also switch them.',
          },
          {
            icon: faPalette,
            title: 'Customizable matches',
            description: 'Set the name of the teams, the colors and even the match sets.',
          },
          {
            icon: faBookOpen,
            title: 'Match summary',
            description: 'See the summary of the match, set by set, point by point.',
          },
          {
            icon: faCircleArrowDown,
            title: 'Local match',
            description: 'Play your own private match wherever you want, without needing internet connection.',
          },
          {
            icon: faGlobe,
            title: 'Online match',
            description: 'Share your match in real time with your friends with the access code.',
          },
          {
            icon: faMoon,
            title: 'Dark mode',
            description: 'Nice and clean, switchable dark and light modes.',
          },
          {
            icon: faVolumeHigh,
            title: 'Sounds',
            description: 'Sounds for match controlls, in both online and offline modes.',
          },
        ]}
      />
      <SecondaryImage backgroundImage={backgroundImageTwo}/>
      <PrivacyPolicy 
        policyTexts={[
          'We do not collect, use, save, or have access to any of your personal data recorded in VoleyScoreBoard for iOS.',
          'Individual settings relating to the VoleyScoreBoard app are not personal and are stored only on your Device.',
        ]}
      />
      <Support items={[
          {
            title: 'How to turn off sounds?',
            description: 'Drag from the left of the screen to the right to open the Drawer. Then search the toggle with the label "Sounds" and make sure it is off.',
          },
          {
            title: 'How to turn off dark mode?',
            description: 'Drag from the left of the screen to the right to open the Drawer. Then search the toggle with the label "Dark mode" and make sure it is off.',
          },
          {
            title: 'How to create a match?',
            description: 'In the home section click on "New Match" then configure your match with the desired sets, team names and colors and then click on "Create Match".',
          },
          {
            title: 'How to create an online match?',
            description: 'In the home section click on "New Match" then configure your match with the desired sets, team names and colors, then enable the "Online match" toggle and finally click on "Create Match".',
          },
          {
            title: 'How to join an online match?',
            description: 'In the home section, write down the access code of the match in the access code input and then click the "Join match" button.',
          },
          {
            title: 'How to share the access code of my online match?',
            description: 'In the match view, click on the access code, it will be copied automatically to your clipboard, then share it with your friends.',
          },
          {
            title: 'How to change the language?',
            description: 'Drag from the left of the screen to the right to open the Drawer. Then search the dropdown with the label "Language", there you will find a list of the available languages.',
          },
          {
            title: 'How to switch teams position?',
            description: 'In the match view, click the two arrows icon between the two score boards, it will switch the teams position.',
          },
      ]}/>
    </>
  );
};

export default Home;
