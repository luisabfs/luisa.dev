import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  margin-bottom: 40px;
`;

export const WrapProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1024px) {
    justify-content: center;
  }

   /* regular phones and below */
   @media (max-width: 480px) {
    padding: 20px 0;
  }
`;
