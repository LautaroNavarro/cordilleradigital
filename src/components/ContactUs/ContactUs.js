import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.backgroundTwo};
  padding-top: 40px;
  padding-bottom: 40px;
`;

const MediaContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 40px;
`;

const SocialMediaSection = styled.div`
`;

const Title = styled.h1`
  font-weight: 100;
  color: ${({theme}) => theme.colors.text};
`;

const Link = styled.a`
  color: ${({theme}) => theme.colors.text};
  text-decoration: underline;
`;

const ContactUs = () => {
  return (
    <Container>
      <Title>CONTACT US</Title>
      <MediaContainer>
        <SocialMediaSection>
          <Title>Email</Title>
          <Link href='mailto:navarro_lautaro@hotmail.com'><h3>navarro_lautaro@hotmail.com</h3></Link>
        </SocialMediaSection>
        <SocialMediaSection>
          <Title>Linkedin</Title>
          <Link href='https://www.linkedin.com/in/lautaro-navarro/'><h3>Lautaro Navarro</h3></Link>
        </SocialMediaSection>
      </MediaContainer>
    </Container>
  );
};

export default ContactUs;
