import styled from 'styled-components';

interface NavProps {
  $open: boolean;
}

export const Container = styled.header`
  box-sizing: border-box;
  position: relative;
  z-index: 5;
  width: 100%;
  padding: 22px 32px;
  border-bottom: 1px solid rgba(183, 186, 195, 0.12);
  background: #292d33;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1274px;
  margin: 0 auto;
`;

export const Brand = styled.a`
  color: #faf7f8;
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.04em;
  text-decoration: none;

  span { color: #e03d58; }

  &:focus-visible {
    outline: 3px solid #f38b9b;
    outline-offset: 5px;
    border-radius: 2px;
  }
`;

export const NavToggle = styled.button`
  display: none;
  border: 1px solid #515660;
  border-radius: 10px;
  padding: 9px 12px;
  color: #faf7f8;
  background: #343840;
  font: 600 14px 'Montserrat', sans-serif;
  cursor: pointer;

  &:focus-visible { outline: 3px solid #f38b9b; outline-offset: 3px; }

  @media (max-width: 760px) { display: inline-flex; align-items: center; gap: 8px; }
`;

export const NavMenu = styled.nav<NavProps>`
  display: flex;
  align-items: center;
  gap: clamp(16px, 2.2vw, 34px);

  a {
    color: #d0d1d6;
    font: 500 13px 'Montserrat', sans-serif;
    text-decoration: none;
    transition: color 150ms ease;
  }

  a:hover, a:focus-visible { color: #fff; }
  a:focus-visible { outline: 2px solid #f38b9b; outline-offset: 5px; border-radius: 2px; }
  .resume-link { color: #f38b9b; font-weight: 700; }

  @media (max-width: 760px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    position: absolute;
    top: calc(100% - 1px);
    left: 0;
    right: 0;
    align-items: stretch;
    flex-direction: column;
    gap: 0;
    padding: 8px 24px 18px;
    border-bottom: 1px solid #515660;
    background: #292d33;

    a { padding: 12px 4px; }
    a + a { border-top: 1px solid rgba(183, 186, 195, 0.12); }
  }

  @media (prefers-reduced-motion: reduce) {
    a { transition: none; }
  }
`;
