import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80%;

  li {
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
    }

    svg {
      display: none;
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
  }
`;
