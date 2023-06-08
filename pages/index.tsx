import Link from 'next/link'

import About from '../components/About';
import Projects from './projects';
import Contact from '../components/Contact';
import Instagram from '../components/Instagram';
import Footer from '../components/Footer';

import Navbar from '../components/Navbar';
import Social from '../components/Social';

import Youtube from 'react-youtube';

import headshot from '../public/assets/images/headshot.jpg';
import {
  Bottom, Wrapper, ContactWrap, InstaWrap, HeaderContainer, HeaderWrapper, HeaderBlurb, Headshot, VideoWrapper
} from '../styles/home';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Navbar />
        <HeaderBlurb>
          <HeaderWrapper>
            <Link href="/sobre">
              <Headshot src={headshot} alt="" />
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
            style={{ aspectRatio: 16/9, margin: 30 }} />
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