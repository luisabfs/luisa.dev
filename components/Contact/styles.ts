import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 52px 24px 58px;
  border-top: 1px solid rgba(183, 186, 195, 0.12);
  color: #faf7f8;
  background: #292d33;
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  text-align: center;

  h2 {
    margin-top: 14px;
    color: #faf7f8;
    font: 700 clamp(32px, 4.3vw, 46px)/1.12 'Montserrat', sans-serif;
    letter-spacing: -0.045em;
  }

  > .contact-description {
    max-width: 620px;
    margin: 14px auto 0;
    color: #d1d3d8;
    font-size: 15px;
    line-height: 1.7;
  }
`;

export const Eyebrow = styled.p`
  color: #f38b9b;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

export const MailLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  margin-top: 22px;
  border-radius: 10px;
  padding: 0 18px;
  color: #fff;
  background: #c7354e;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;

  &:hover { background: #b92c45; }
  &:focus-visible { outline: 3px solid #f38b9b; outline-offset: 3px; }
`;
