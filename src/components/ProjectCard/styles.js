import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  height: 400px;
  margin: 20px;
  padding: 10px;
  border-radius: 7px;
  background-color: #f2f2f2;
  box-shadow:0 .2rem 1rem rgba(0,0,0,.11);
  transition: transform .2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: 200px;
  background-color: #f4f4f4;
  border-radius: 4px;
`;

export const Wrapper = styled.div`
  justify-content: center;
  height: 100%;
`;

export const WrapCaption = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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