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
    margin: 16px 15px;

    a {
      color: #000;
      font-size: 18px;
      text-decoration: none;

      span {
        color: #88c6dd;
      }

      &:hover {
        color: #88c6dd;
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
    }
  }
`;
