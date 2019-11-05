import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;

  /* ############### RESPONSIVE ############### */

  @media (max-width: 1180px) {
    max-width: 800px;
  }

  /* portrait tablet and regular desktop */
  @media (max-width: 768px) {
    max-width: 600px;
  }

  /* portrait phones to regular tablet */
  @media (min-width: 768px) and (max-width: 979px) {
  }

  /* regular phones and below */
  @media (max-width: 480px) {
    margin: 0 20px;
  }
`;

export const NavMenu = styled.ul`
  width: 100%;
  list-style: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* ############### RESPONSIVE ############### */

  @media (max-width: 768px) {
    align-items: ${(props) => (props.menu === true ? 'flex-start' : 'center')};
  }
`;

export const NavItem = styled.li`
  align-items: center;
  margin-top: 10px;

  a {
    color: #000;
    font-size: 18px;
    text-decoration: none;
    padding: 16px 15px;

    span {
      color: #88c6dd;
    }

    &:hover {
      color: #88c6dd;
    }

    /* ############### RESPONSIVE ############### */

    @media (max-width: 1180px) {
      padding: 12px 10px;
    }
  }

  svg {
    display: none;

    @media (max-width: 769px) {
      margin-left: auto;
      padding: 15px 0;
    }
  }

  &:first-child {
    margin-right: auto;

    a {
      font-family: 'Fredericka the Great', cursive;
      font-size: 48px;

      &:hover {
        color: #000;
      }
    }

    @media (max-width: 769px) {
      padding: 15px 0;
    }
  }

    /* ############### RESPONSIVE ############### */

    @media (max-width: 768px) {
    svg {
      display: flex;
    }

    &:not(:first-child):not(:last-child) {
      display: none;
    }
  }
`;

export const WrapMenu = styled.div`
  display: flex;
  justify-content: flex-end;
`;
