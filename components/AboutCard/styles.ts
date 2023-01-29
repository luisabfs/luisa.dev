import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;
  padding: 40px;
  background-color: #f2f2f2;
`;

export const WrapCaption = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  margin-left: 12px;
`;

export const Content = styled.div`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

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
