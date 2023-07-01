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
  @media (max-width: ${({theme}) => theme.sizes.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
  }
`;

const SocialMediaSection = styled.div`
  @media (max-width: ${({theme}) => theme.sizes.tablet}) {
    width: 80%;
    text-align: center;
    margin-top: 40px;
  }
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
    <Container id='Contact'>
      <Title>CONTACT US</Title>
      <MediaContainer>
        <SocialMediaSection>
          <Title>Email</Title>
          <Link href='mailto:kevin@cordilleradigital.com'><h3>kevin@cordilleradigital.com</h3></Link>
          <Link href='mailto:lautaro@cordilleradigital.com'><h3>lautaro@cordilleradigital.com</h3></Link>
        </SocialMediaSection>
        <SocialMediaSection>
          <Title>Social Media</Title>
          <Link href='https://www.linkedin.com/company/cordillera-digital-software'><h3>Linkedin</h3></Link>
        </SocialMediaSection>
      </MediaContainer>
    </Container>
  );
};

export default ContactUs;
