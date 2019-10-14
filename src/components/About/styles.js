import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 40px;

  h1 {
    width: 700px;
    text-align: center;
    padding: 15px;
    font-size: 32px;
    font-weight: 400;
    margin: 20px;
    box-shadow: 0 4px 6px -7px #aaa;
  }
`;

export const CaptionWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;

  img {
    width: 50px;
    height: 50px;
    padding: 15px;
  }

  span {
    font-size: 20px;
    font-weight: 300;
    margin-left: 10px;
  }
`;

export const Action = styled.a`
  height: 30px;
  text-decoration: none;
  text-align: center;
  color: #000;
  font-size: 18px;
  border-bottom: 3px solid #656565;
  transition: .2s ease-in-out;

  &:hover {
    color: #88c6dd;
    border-bottom: 3px solid #88c6dd;
  }
`;
