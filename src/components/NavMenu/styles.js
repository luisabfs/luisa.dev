import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: absolute;
  z-index: 100;
  right: 10%;
  background: #fff;
  margin: 10px;

  /* regular phones and below */
  @media (max-width: 480px) {
    right: 5%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #eee;
`;

export const NavMenu = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  li {
    align-items: center;
    padding: 16px 15px;

    a {
      color: #000;
      font-size: 18px;
      text-decoration: none;
      /* padding: 16px 15px; */

      span {
        color: #88c6dd;
      }

      &:hover {
        color: #88c6dd;
      }
    }
  }
`;
