import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 20px;
  padding: 10px;
  border-radius: 7px;
  background-color: #f2f2f2;
  transition: transform .2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const WrapCaption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px
`;

export const Title = styled.h1`
  margin-left: 12px;
  justify-content: center;
  text-align: center;

  h1 {
    margin: 0;
  }
`;

export const Content = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 15px;

  a {
    color: #88c6dd;
    font-weight: 700;
    text-decoration: none;
    margin-bottom: 5px;

    &:hover {
      color: #6594a5;
    }

    img {
      width: 100%;
    }
  }
`;
