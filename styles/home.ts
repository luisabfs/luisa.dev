import styled from 'styled-components';
import Image from 'next/image';

export const Bottom = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  /* background-color: #f2f2f2; */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 20px 0;
  padding: 20px;
`;

export const ContactWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 20px;
`;

export const InstaWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  color: #faf7f8;
  background: #292d33;
`;

export const HeaderBlurb = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  align-items: center;
  gap: clamp(40px, 6vw, 92px);
  width: min(1274px, calc(100% - 64px));
  min-height: 660px;
  margin: 0 auto;
  padding: 62px 0 88px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 44px;
    min-height: 0;
    padding: 72px 0;
  }

  @media (max-width: 600px) {
    width: calc(100% - 40px);
    gap: 34px;
    padding: 50px 0 64px;
  }
`;

export const HeaderWrapper = styled.div`
  min-width: 0;

  .hero-eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 30px;
    color: #f38b9b;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    color: #faf7f8;
    font-size: clamp(42px, 5.1vw, 66px);
    font-weight: 700;
    letter-spacing: -0.055em;
    line-height: 1.04;
  }

  h2 {
    margin: 14px 0 0;
  }

  .hero-heading-supporting {
    max-width: 700px;
    color: #d1d0d6;
    font-size: clamp(34px, 4vw, 50px);
    font-weight: 500;
    letter-spacing: -0.045em;
    line-height: 1.16;
  }

  .hero-summary {
    max-width: 620px;
    margin: 28px 0 0;
    color: #c6c8ce;
    font-size: clamp(16px, 1.4vw, 18px);
    line-height: 1.75;
  }

  @media (max-width: 600px) {
    .hero-eyebrow { font-size: 11px; letter-spacing: 0.06em; }
    h1 { font-size: clamp(38px, 11vw, 52px); }
    .hero-heading-supporting { margin-top: 12px; font-size: clamp(32px, 8.4vw, 42px); line-height: 1.14; }
    .hero-summary { margin-top: 22px; font-size: 16px; line-height: 1.7; }
  }
`;

export const Headshot = styled(Image)`
  width: 46px;
  height: 46px;
  flex: 0 0 46px;
  border: 2px solid rgba(243, 139, 155, 0.7);
  border-radius: 50%;
  object-fit: cover;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;

  a {
    display: inline-flex;
    min-height: 52px;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    border-radius: 12px;
    padding: 0 20px;
    color: #fff;
    background: #c7354e;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    transition: background 150ms ease, border-color 150ms ease, transform 150ms ease;
  }

  a:hover { background: #b92c45; transform: translateY(-1px); }
  a:focus-visible { outline: 3px solid #f38b9b; outline-offset: 4px; }
  a.secondary { border-color: #515660; background: #3d424b; }
  a.secondary:hover { border-color: #858a94; background: #454b55; }

  @media (prefers-reduced-motion: reduce) {
    a { transition: none; }
    a:hover { transform: none; }
  }
`;

export const TechLine = styled.p`
  margin: 28px 0 0;
  color: #c6c8ce;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  line-height: 1.8;
  text-transform: uppercase;
  word-spacing: 6px;
`;

export const VideoCard = styled.div`
  min-width: 0;
  padding: 18px 18px 20px;
  border: 1px solid rgba(183, 186, 195, 0.12);
  border-radius: 19px;
  background: #343840;
  box-shadow: 0 24px 60px rgba(8, 10, 14, 0.22);

  .player-frame {
    position: relative;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 13px;
    background: #20242a;
  }

  .player-frame iframe { position: absolute; inset: 0; width: 100%; height: 100%; }

  .video-note {
    margin: 18px 2px 0;
    color: #b7bac3;
    font-size: 12px;
    line-height: 1.5;
  }

  .video-link {
    display: inline-block;
    margin: 12px 2px 0;
    color: #f38b9b;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
  }

  .video-link:hover { color: #ffc0c9; }
  .video-link:focus-visible { outline: 2px solid #f38b9b; outline-offset: 4px; }
`;

export const VideoWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
