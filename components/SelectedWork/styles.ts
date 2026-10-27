import styled from 'styled-components';

export const Section = styled.section`
  &, & * { box-sizing: border-box; }
  width: 100%;
  padding: 82px 32px 96px;
  color: #faf7f8;
  background: #292d33;
  border-top: 1px solid rgba(183, 186, 195, 0.12);

  @media (max-width: 600px) { padding: 60px 20px 72px; }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1274px;
  margin: 0 auto;

  h2 {
    margin: 18px 0 0;
    color: #faf7f8;
    font: 700 clamp(36px, 4.5vw, 48px)/1.1 'Montserrat', sans-serif;
    letter-spacing: -0.045em;
  }
`;

export const Eyebrow = styled.p`
  color: #f38b9b;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Intro = styled.p`
  max-width: 760px;
  margin: 18px 0 42px;
  color: #c6c8ce;
  font-size: 16px;
  line-height: 1.7;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr);
  align-items: start;
  gap: 24px;

  @media (max-width: 820px) { grid-template-columns: 1fr; gap: 20px; }
`;

export const Card = styled.article<{ $featured: boolean }>`
  position: relative;
  min-width: 0;
  padding: 20px;
  border: 1px solid rgba(183, 186, 195, 0.14);
  border-radius: 20px;
  background: ${({ $featured }) => ($featured ? '#343840' : '#353a43')};

  .featured-badge {
    display: inline-block;
    margin: 0 0 16px;
    border-radius: 999px;
    padding: 7px 12px;
    color: #fff;
    background: #c7354e;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  @media (max-width: 600px) { padding: 14px; border-radius: 16px; }
`;

export const ProjectImageFrame = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: clamp(190px, 22vw, 290px);
  border-radius: 13px;
  border: 1px solid rgba(183, 186, 195, 0.14);
  background: #292d33;
`;

export const CardBody = styled.div`
  padding: 22px 4px 4px;

  .description {
    margin-top: 12px;
    color: #d1d3d8;
    font-size: 15px;
    line-height: 1.65;
  }

  .highlights {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 18px 0 14px;
    padding: 0;
    list-style: none;
  }

  .highlights li {
    border: 1px solid #515660;
    border-radius: 999px;
    padding: 6px 10px;
    color: #e1e2e6;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.35;
  }
`;

export const CardTitle = styled.h3`
  color: #faf7f8;
  font: 700 clamp(22px, 2.5vw, 30px)/1.2 'Montserrat', sans-serif;
  letter-spacing: -0.035em;
`;

export const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  color: #f38b9b;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;

  &:hover { color: #ffc0c9; }
  &:focus-visible { outline: 2px solid #f38b9b; outline-offset: 4px; border-radius: 2px; }
`;
