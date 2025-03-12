import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border: 2px dotted #c4c4c4;
  border-radius: 4px;
  height: 100%;

  h1 {
    margin-bottom: 10px;
    color: #f2f2f2;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Card = styled.a`
  width: 150px;
  height: 150px;
  margin: 5px;

  img {
    border-radius: 4px;
    width: 150px;
    height: 150px;
  }
`;
