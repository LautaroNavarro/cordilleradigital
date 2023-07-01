import {React} from 'react';
import styled from 'styled-components';
import backgroundImage from './../../assets/gt-background.webp';
import {
  faMoon,
  faLanguage,
  faChartSimple,
  faPalette,
  faVolumeHigh,
  faDumbbell,
  faBellConcierge,
  faStopwatch,
  faCircleArrowDown,
 } from '@fortawesome/free-solid-svg-icons'

import MainImage from './../../components/MainImage/MainImage';
import SecondaryImage from './../../components/SecondaryImage/SecondaryImage';
import Boxes from './../../components/Boxes/Boxes';
import TwoColumnsSection from './../../components/TwoColumnsSection/TwoColumnsSection';
import PrivacyPolicy from './../../components/PrivacyPolicy/PrivacyPolicy';
import Support from './../../components/Support/Support';
import backgroundImageTwo from './../../assets/gt-background2.webp';
import screenShot1 from './../../assets/gt-screenshot-1.webp';
import screenShot2 from './../../assets/gt-screenshot-2.webp';
import screenShot3 from './../../assets/gt-screenshot-3.webp';
import screenShot4 from './../../assets/gt-screenshot-4.webp';

const Home = () => {
  return (
    <>
      <MainImage backgroundImage={backgroundImage} title='Gym' secondTitle='Tracker'/>
      <Boxes backgroundImage={backgroundImage} nameOne='What' nameTwo='We' nameThree='Do?' boxes={
        [
          {
            title: 'Help exercise',
            description: 'Keep track of your progress and help you to train',
            icon: faDumbbell,
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
          {
            title: 'Dark mode',
            description: 'Nice and clean, switchables dark and light modes',
            icon: faMoon,
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
            icon: faChartSimple,
            title: 'Progress visualization',
            description: 'You can see your progress in a multiple charts.',
          },
          {
            icon: faPalette,
            title: 'Fully customizable routines',
            description: 'Create your own routines and exercises',
          },
          {
            icon: faDumbbell,
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
          'We do not collect, use, save, or have access to any of your personal data recorded in GymTracker for iOS.',
          'Individual settings relating to the GymTracker app are not personal and are stored only on your Device.',
        ]}
      />
      <Support items={[
          {
            title: 'How to turn off sounds?',
            description: 'Drag from the right of the screen to the left to open the Drawer. Then search the toggle with the label "Sounds" and make sure it is off.',
          },
          {
            title: 'How to turn off dark mode?',
            description: 'Drag from the right of the screen to the left to open the Drawer. Then search the toggle with the label "Dark mode" and make sure it is off.',
          },
          {
            title: 'How to create a routine?',
            description: 'Go to the schedule tab and click on create routine, select a name for the routine.',
          },
          {
            title: 'How to create an exercise?',
            description: 'Click the routine you in which you want to add the routine, then click on create exercise.',
          },
          {
            title: 'How to delete a routine?',
            description: 'Go to the schedule tab and click in the delete icon in the right of the routine.',
          },
          {
            title: 'How to remove an exercise from a routine?',
            description: 'Go the the schedule tab, click the routine, and then the remove icon in the right of the exercise.',
          },
          {
            title: 'How to delete an exercise?',
            description: 'Drag from the right of the screen to the left to the Drawer. Then click on manage exercises, and click the delete icon in the right of the exercise.',
          },
          {
            title: 'How to change the language?',
            description: 'Drag from the right of the screen to the left to open the Drawer. Then search the dropdown with the label "Language", there you will find a list of the available languages.',
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
