import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-left: 20px;
  padding: 20px;
  border: 2px dotted #c4c4c4;
  border-radius: 4px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const Card = styled.a`
  width: 150px;
  height: 150px;
  margin: 5px;

  img {
    border-radius: 4px;
  }
`;
