import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 76px 32px 82px;
  border-top: 1px solid rgba(183, 186, 195, 0.12);
  color: #faf7f8;
  background: #292d33;

  @media (max-width: 600px) { padding: 58px 20px 64px; }

  .about-inner {
    width: 100%;
    max-width: 1274px;
    margin: 0 auto;
  }
`;

export const Eyebrow = styled.p`
  color: #f38b9b;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

export const Lead = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  align-items: start;
  gap: clamp(32px, 6vw, 90px);
  margin-top: 22px;

  @media (max-width: 760px) { grid-template-columns: 1fr; gap: 18px; }
`;

export const Title = styled.h2`
  color: #faf7f8;
  font: 700 clamp(38px, 4.5vw, 52px)/1.08 'Montserrat', sans-serif;
  letter-spacing: -0.05em;
`;

export const Intro = styled.p`
  max-width: 610px;
  color: #d1d3d8;
  font-size: 16px;
  line-height: 1.8;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 40px;

  @media (max-width: 700px) { grid-template-columns: 1fr; gap: 10px; margin-top: 28px; }
`;

export const InterestCard = styled.article`
  min-width: 0;
  padding: 20px 22px;
  border: 1px solid rgba(183, 186, 195, 0.13);
  border-radius: 13px;
  background: #343840;

  h3 {
    color: #f38b9b;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  p {
    margin-top: 10px;
    color: #e1e2e6;
    font-size: 14px;
    line-height: 1.55;
  }
`;

export const AboutLink = styled.p`
  margin-top: 25px;

  a {
    color: #c6c8ce;
    font-size: 13px;
    text-decoration: none;
  }

  a:hover { color: #ffc0c9; }
  a:focus-visible { outline: 2px solid #f38b9b; outline-offset: 4px; border-radius: 2px; }
`;
