import React from 'react';

import {
  Container,
  Wrapper,
  Blurb,
  Headshot,
  SocialWrap,
} from './styles';

import Navbar from '../Navbar';

import background from '../../assets/images/home_background.png';
import headshot from '../../assets/images/headshot.jpg';
import githubIcon from '../../assets/images/github_24px.png';
import linkedinIcon from '../../assets/images/linkedin_24px.png';
import instagramIcon from '../../assets/images/instagram_24px.png';
import behanceIcon from '../../assets/images/behance_24px.png';
import emailIcon from '../../assets/images/email_24px.png';

const Header = () => (
  <Container bg={background}>
    <Navbar />
    <Blurb>
      <Wrapper>
        <a href="">
          <Headshot src={headshot} alt="" />
        </a>
        <h1>Luísa Barros</h1>
        <h2>Desenvolvedora Full-Stack</h2>
        <SocialWrap>
          <a href="">
            <img src={githubIcon} alt="" />
          </a>
          <a href="">
            <img src={linkedinIcon} alt="" />
          </a>
          <a href="">
            <img src={instagramIcon} alt="" />
          </a>
          <a href="">
            <img src={behanceIcon} alt="" />
          </a>
          <a href="">
            <img src={emailIcon} alt="" />
          </a>
        </SocialWrap>
      </Wrapper>
    </Blurb>
  </Container>
);

export default Header;
