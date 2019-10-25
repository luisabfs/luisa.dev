import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f2f2f2;

  h1 {
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) {
  }
`;

export const Avatar = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 100%;
  margin: 20px 0;
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
