import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 20px;
  background-color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const Card = styled.a`
  width: 150px;
  height: 150px;
  margin: 5px;

  img {
    border-radius: 4px;
  }
`;
