import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80%;
  background-color: #f2f2f2;

  h1 {
    padding: 15px;
    font-size: 32px;
    font-weight: 300;
    margin: 40px;
    box-shadow: 0 4px 6px -7px #aaa;
  }
`;

export const CaptionWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
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
