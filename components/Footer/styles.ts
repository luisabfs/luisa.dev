import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  box-sizing: border-box;
  padding: 28px 32px;
  color: #b7bac3;
  background: #22262b;

  @media (max-width: 600px) { padding: 26px 20px; }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  width: 100%;
  max-width: 1274px;
  margin: 0 auto;

  .footer-brand { min-width: 190px; }

  @media (max-width: 800px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Brand = styled.a`
  color: #faf7f8;
  font: 700 20px 'Montserrat', sans-serif;
  letter-spacing: -0.04em;
  text-decoration: none;

  span { color: #e03d58; }
  &:focus-visible { outline: 2px solid #f38b9b; outline-offset: 4px; }
`;

export const Note = styled.p`
  margin-top: 7px;
  color: #b7bac3;
  font-size: 11px;
  line-height: 1.5;
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px 20px;

  a {
    color: #d1d3d8;
    font-size: 12px;
    text-decoration: none;
  }

  a:hover { color: #ffc0c9; }
  a:focus-visible { outline: 2px solid #f38b9b; outline-offset: 4px; border-radius: 2px; }

  @media (max-width: 800px) { justify-content: flex-start; }
`;
