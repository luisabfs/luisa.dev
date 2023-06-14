import { useState } from 'react';
import Link from 'next/link'

import About from '../components/About';
import Projects from './projects';
import Contact from '../components/Contact';
import Instagram from '../components/Instagram';
import Footer from '../components/Footer';

import Navbar from '../components/Navbar';
import Social from '../components/Social';

import Youtube from 'react-youtube';
import Skeleton from 'react-loading-skeleton';

import headshot from '../public/assets/images/headshot.jpg';
import {
  Bottom, Wrapper, ContactWrap, InstaWrap, HeaderContainer, HeaderWrapper, HeaderBlurb, Headshot, VideoWrapper
} from '../styles/home';
import 'react-loading-skeleton/dist/skeleton.css'


export default function Home() {
  const [playerState, setPlayerState] = useState<number>();

  return (
    <>
      <HeaderContainer>
        <Navbar />
        <HeaderBlurb>
          <HeaderWrapper>
            <Link href="/sobre">
              <Headshot loading='lazy' src={headshot} alt="" />
            </Link>
            <h1>Luísa Barros</h1>
            <h2>Desenvolvedora Mobile</h2>
            <Social />
          </HeaderWrapper>

          <VideoWrapper>
              <Youtube videoId="GwClERflCVw" opts={{
                height: '100%',
                width: '100%',
                playerVars: {
                  autoplay: 1,
                  rel: 0,
                  modestbranding: 1
                }
              }}
              onStateChange={e => setPlayerState(e.data)}
              style={{ aspectRatio: 16/9, margin: 30 }} />
    
              {playerState == null
                ? <Skeleton width={'100%'} height={'100%'} style={{ position: 'absolute', top: 0, right: 0, aspectRatio: 16/9, margin: 30 }} /> 
                : null
              }
          </VideoWrapper>
        </HeaderBlurb>
      </HeaderContainer>

      <About />
      <Projects />
      <Bottom>
        <Wrapper>
          <ContactWrap id="contact">
            <Contact />
          </ContactWrap>
          <InstaWrap>
            <Instagram />
          </InstaWrap>
        </Wrapper>
      </Bottom>
      <Footer />
    </>
  )
}