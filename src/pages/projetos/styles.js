import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;
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

export const WrapCaption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
  }

  img {
    margin: 10px;
  }

  /* regular phones and below */
  @media (max-width: 424px) {
    h1 {
      font-size: 24px;
    }
  }
`;
