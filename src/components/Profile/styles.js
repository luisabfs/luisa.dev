import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 350px;
  padding: 40px;
  background-color: #f2f2f2;

  h1 {
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 30px;
    padding: 0 10px;
  }
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  margin-bottom: 20px;
`;

export const Location = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;
