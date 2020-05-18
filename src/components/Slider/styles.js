import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  width: 100%;

  a {
    width: 120px;
    height: 30px;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    text-align: center;
    color: #000;
    font-size: 18px;
    border-bottom: 3px solid #656565;
    transition: 0.2s ease-in-out;

    &:hover {
      color: #88c6dd;
      border-bottom: 3px solid #88c6dd;
    }
  }
`;

export const WrapCaption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background: url(${props => props.bg}) no-repeat center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-attachment: scroll;
`;

export const WrapProject = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  margin: 0 40px 80px 40px;

  div {
    div {
      div {
        div {
          div {
            div {
              width: 100%;
              height: 100%;
              z-index: -1;
            }
          }
        }
      }
    }
  }
`;

export const Project = styled.div`
  display: flex;

  div {
  }
`;
