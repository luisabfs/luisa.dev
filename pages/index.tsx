import { useState } from 'react';
import Link from 'next/link'

import SelectedWork from '../components/SelectedWork';
import HomeAbout from '../components/HomeAbout';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import Navbar from '../components/Navbar';
import Social from '../components/Social';

import Youtube from 'react-youtube';
import Skeleton from 'react-loading-skeleton';

import headshot from '../public/assets/images/headshot.jpeg';
import {
  HeaderContainer, HeaderWrapper, HeaderBlurb, Headshot,
  HeroActions, TechLine, VideoCard, VideoWrapper,
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
            <div className="hero-eyebrow">
              <Headshot src={headshot} alt="Luísa Barros" width={46} height={46} />
              <span>Frontend &amp; Mobile Engineer · Brazil</span>
            </div>
            <h1>Hi, I&apos;m Luísa.</h1>
            <h2 className="hero-heading-supporting">I build thoughtful digital experiences.</h2>
            <p className="hero-summary">
              I&apos;m a frontend and mobile engineer with 6+ years of experience turning complex ideas into intuitive, reliable products.
            </p>
            <HeroActions>
              <Link href="/#projects">Explore my work ↗</Link>
              <Link className="secondary" href="/#contact">Get in touch</Link>
            </HeroActions>
            <TechLine>React Native · React · TypeScript · Next.js · Expo</TechLine>
            <Social />
          </HeaderWrapper>

          <VideoCard>
            <div className="player-frame">
              <VideoWrapper>
                <Youtube videoId="GwClERflCVw" title="Introduction video: Luísa Barros" opts={{
                  height: '100%',
                  width: '100%',
                  playerVars: {
                    autoplay: 1,
                    rel: 0,
                    modestbranding: 1
                  }
                }}
                onStateChange={e => setPlayerState(e.data)}
                style={{ width: '100%', height: '100%' }} />

                {playerState == null
                  ? <Skeleton width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} />
                  : null
                }
              </VideoWrapper>
            </div>
            <p className="video-note">Recorded in 2023</p>
            <a className="video-link" href="https://youtu.be/GwClERflCVw" target="_blank" rel="noopener noreferrer">
              Watch my introduction ↗
            </a>
          </VideoCard>
        </HeaderBlurb>
      </HeaderContainer>

      <SelectedWork />
      <HomeAbout />
      <Contact />
      <Footer />
    </>
  )
}
