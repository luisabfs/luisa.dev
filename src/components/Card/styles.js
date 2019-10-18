import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;
  height: 650px;
  padding: 40px;
  background-color: #f2f2f2;

  h1 {
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    margin-left: 10px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const Avatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 100%;
  margin-bottom: 40px;
`;
